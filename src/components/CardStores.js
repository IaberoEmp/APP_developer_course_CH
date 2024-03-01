import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryShadow from './wrappers/PrimaryShadow'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardStores = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("CategoryList",{storeSelected:item})}>
        <PrimaryShadow style={styles.container}>
            <Text style={styles.text}>
                {item}
            </Text>
        </PrimaryShadow>
    </Pressable>
  )
}

export default CardStores

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:colors.grey1,
        marginHorizontal:'5%',
        marginVertical:10,
        padding:15,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        fontSize:20,
        fontFamily:fonts.PacificoRegular,
        textTransform:'capitalize'
    }
})