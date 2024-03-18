import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from '../components/MapPreview';
import AddButton from '../components/AddButton';
import LoadingSpinner from '../components/LoadingSpinner';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';
import { useSelector } from 'react-redux';
import { usePutUserLocationMutation } from '../app/services/profile';

const LocationSelector = ({ navigation }) => {
    
    const localId = useSelector((state)=>state.auth.localId)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [address, setAdrress] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [region, setRegion] = useState(null);
    const [subRegion, setSubRegion] = useState(null);
    const [street, setStreet] = useState(null);
    const [streetNumber, setStreetNumber] = useState(null);
    const [district, setDistrict] = useState(null);
    const [isoCountryCode, setIsoCountryCode] = useState(null);
    const [triggerUserLocation] = usePutUserLocationMutation()



    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setIsLoading(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            setIsLoading(false);
        })();
    }, []);

    useEffect(()=>{
        (async ()=>{
            if (location) {
                const addressResponse = await Location.reverseGeocodeAsync({
                    latitude: location.latitude,
                    longitude: location.longitude,
                });
                if (addressResponse.length > 0) {
                    setAdrress(addressResponse[0].formattedAddress)
                    setCountry(addressResponse[0].country)
                    setCity(addressResponse[0].city)
                    setPostalCode(addressResponse[0].postalCode)
                    setRegion(addressResponse[0].region)
                    setSubRegion(addressResponse[0].subregion)
                    setStreet(addressResponse[0].street)
                    setStreetNumber(addressResponse[0].streetNumber)
                    setDistrict(addressResponse[0].district)
                    setIsoCountryCode(addressResponse[0].isoCountryCode)
                }
            }
        })()
    }
    ,[location])

    const onConfirmAddress = async () => {
        
        const locationData = {
            address,street,streetNumber,postalCode,country,city,region,subRegion,district,isoCountryCode,location
        }
        
        await triggerUserLocation({localId,locationData})
        navigation.navigate('EditProfile');
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.addButton}>
                <AddButton title="Add Location" onPress={onConfirmAddress} />
            </View>
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    {isLoading ? (
                        <View style={styles.circleContainer}>
                            <LoadingSpinner visible={true} color={colors.black1} size='medium'/>
                        </View>
                    ) : (
                        <View style={styles.circleContainer}>
                            <MapPreview latitude={location.latitude} longitude={location.longitude} />
                        </View>
                    )}
                </View>
                <View style={styles.locationInfo}>
                    <Text style={styles.text}>{address}</Text>
                </View>
            </View>
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        gap: 20,
        justifyContent:'center'
    },
    text: {
        fontSize: 20,
        fontFamily:fonts.LobsterRegular
    },
    locationInfo:{
        flexDirection:'row',
        gap:15
    },
    mapContainer:{
        width:'100%',
        height:350,
        justifyContent:'center',
        alignItems:'center'
    },
    circleContainer:{
        width: 350,
        height: 350,
        borderRadius: 175, 
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:3,
        borderColor:colors.grey2
    },
    addButton:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    mainContainer:{
        flex: 1,
        paddingTop:10
    }
});