import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../app/services/profile'
import { useFocusEffect } from '@react-navigation/native'

const Profile = ({navigation}) => {

  const localId = useSelector((state)=>state.auth.localId)
  const {data} = useGetProfileImageQuery(localId)


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={data ? {uri:data.profileImage} : { uri: 'https://via.placeholder.com/150' }}//Dummy por ahora.
          style={styles.profilePic}
        />
        <Text style={styles.userName}>Nombre de Usuario</Text>
        <View style={styles.actionButtons}>
          {/*Probando otros botonos diferentes a Pressable*/}
          <AddButton title={"Editar"} onPress={()=>navigation.navigate("EditProfile")}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Configuración</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoText}>Correo: usuario@example.com</Text>
        <Text style={styles.infoText}>Ubicación: Ciudad, País</Text>
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
      marginBottom: 20,
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 10,
      marginTop:35
    },
    userName: {
      fontSize: 24,
      fontFamily:fonts.LobsterRegular,
    },
    actionButtons: {
      flexDirection:'row',
      marginTop: 10,
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
      gap:5,
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
    }
  }
);

export default Profile
