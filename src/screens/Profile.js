import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/profile'


const Profile = ({navigation}) => {

  const localId = useSelector((state)=>state.auth.localId)
  const {data} = useGetProfileImageQuery(localId)
  const {data:locationData} = useGetUserLocationQuery(localId)

  return (
    <View style={styles.container}>
      <View style={styles.actionButtons}>
          <AddButton title={"Editar"} onPress={()=>navigation.navigate("EditProfile")}/>
      </View>
      <View style={styles.header}>
        <Image
          source={data ? {uri:data.profileImage} : { uri: 'https://via.placeholder.com/150' }}//Dummy por ahora.
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Nombre de Usuario</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoText}>Correo: usuario@example.com</Text>
        <Text style={styles.infoText}>Ubicacion</Text>
        <Text style={styles.subInfoText}>{locationData ? locationData.streetNumber : null} {locationData ? locationData.street : null}, {locationData ? locationData.city : null}, {locationData ? locationData.postalCode : null}</Text>
        <Text style={styles.subInfoText}>{locationData ? locationData.subRegion : null}, {locationData ? locationData.region : null}</Text>
        <Text style={styles.subInfoText}>{locationData ? locationData.country : null}</Text>
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
      alignItems: 'center',
      marginBottom: 5,
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 15,

    },
    userName: {
      fontSize: 24,
      fontFamily:fonts.LobsterRegular,
    },
    actionButtons: {
      marginTop:-15,
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    button: {
      backgroundColor:colors.black1,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    buttonText: {
      color:colors.grey1,
      fontFamily:fonts.LobsterRegular
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
    subInfoText:{
      fontSize: 15,
      fontFamily:fonts.SatisfyRegular
    }
});

export default Profile
