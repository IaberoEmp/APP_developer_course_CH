import { Platform, StatusBar, StyleSheet, Text, View,Pressable} from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import {Ionicons} from '@expo/vector-icons'


const Header = ({tittle="Miia Marketplace",navigation}) => {
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && <Pressable onPress={()=>navigation.goBack()} style={styles.goBack}>
        <Ionicons name='chevron-back' size={35} color={colors.grey1}/>
      </Pressable>}
      <Text style={styles.text}>{tittle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black1,
        height:70,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        position:'relative'
    },
    text:{
        fontSize:30,
        color:colors.grey1,
        fontFamily:fonts.LobsterRegular
    },
    goBack: {
      position:'absolute',
      left:10,
      bottom:10
    }
})