import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import AddButton from '../components/AddButton'
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useGetProfileImageQuery, useGetUserLocationQuery, usePutProfileImageMutation } from '../app/services/profile'
import { useSelector } from 'react-redux'


const EditProfile = ({navigation}) => {

    const [profileImage,setProfileImage] = useState("")
    const [triggerProfileImage] = usePutProfileImageMutation()
    const localId = useSelector((state)=>state.auth.localId)
    const {data,isSuccess} = useGetProfileImageQuery(localId)
    const {data:locationData} = useGetUserLocationQuery(localId)
    
    useEffect(()=>{
        if(isSuccess && data) setProfileImage(data.profileImage)
    },[isSuccess,data])

    useEffect(()=>{
        if(locationData) {locationData}
    },[isSuccess,data])

    const pickProfileImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync() //Pido los permisos para usar la camara. Granted es una propiedad que devuelve true or false.
        if(granted){
            let result = await ImagePicker.launchCameraAsync({ //laucnchCamaraAsync ejecuta la camara y le agregmos alguna propiedades.
                allowsEditing:true, 
                aspect:[4,3],
                quality:0.5,
                base64:true //Esto trasnforma la imagen en un objeto almacenable en la base de datos.
            })
            if(!result.canceled){
                setProfileImage('data:image/jpeg;base64,'+result.assets[0].base64)
            }
        }
    }
    const confirmProfileImage = () => {
        triggerProfileImage({profileImage,localId})
        navigation.navigate("Profile")
    }

    const LocationEdit = ()=> navigation.navigate("LocationSelector")


    return (
        <View style={styles.container}>
            <View style={styles.confirm}>
                <AddButton title={"Confirm"} onPress={confirmProfileImage}/>    
            </View>
            <View style={styles.header}>
                <View>
                    <Image
                    source={profileImage ? { uri: profileImage } : {uri:'https://via.placeholder.com/150'}}//Dummy por ahora.
                    style={styles.profilePic}
                    />
                    <View style={styles.addImage}>
                        <Pressable onPress={pickProfileImage}>
                            <MaterialIcons name='add-a-photo' size={25} color={colors.black1}/>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.userName}>Nombre de Usuario</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.infoText}>Correo: usuario@example.com</Text>
                <View style={styles.addLocation}>
                    <Text style={styles.infoText}>Ubicación</Text>
                    <View style={styles.editLocationButton}>
                        <Pressable onPress={LocationEdit}>
                            <MaterialIcons name='edit' size={25} color={colors.black1}/>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.subInfoText}>{locationData.streetNumber} {locationData.street}, {locationData.city}, {locationData.postalCode}</Text>
                <Text style={styles.subInfoText}>{locationData.subRegion}, {locationData.region}</Text>
                <Text style={styles.subInfoText}>{locationData.country}</Text>
            </View>
            <View style={styles.profileDetails}>
                <Text style={styles.profileDetailsText}>Aca se pueden agregar mas datellas como por ejemplo ultimas ordenes o algunas estadisitcas suyas en la app</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        paddingTop:20
    },
    header: {
        alignItems:'center',
        marginBottom:5,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    userName: {
        fontSize: 24,
        fontFamily:fonts.LobsterRegular,
    },
    profileInfo: {
        gap:2,
        alignItems:'center'
    },
    infoText: {
        fontSize: 18,
        fontFamily:fonts.PacificoRegular
    },
    profileDetails: {
        borderWidth:2,
        flex:0.70,
        borderRadius:10,
        padding:5
    },
    profileDetailsText:{
        fontFamily:fonts.SatisfyRegular
    },
    confirm:{
        marginTop:-15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    addImage:{
        marginTop:-30,
        marginBottom:10,
        alignItems:'flex-end'
    },
    addLocation:{
        alignItems:'center',
        flexDirection:'row',
        marginRight:-40
    },
    editLocationButton:{
        alignItems:'center',
        marginLeft:20
    },
    subInfoText:{
        fontSize: 15,
        fontFamily:fonts.SatisfyRegular
    }
});

export default EditProfile
