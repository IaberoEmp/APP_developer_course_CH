import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryShadow from './wrappers/PrimaryShadow'
import colors from '../utils/globals/colors'

const CardCategories = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("CategoryList",{categorySelected:item.title})}>
        <PrimaryShadow style={styles.container}>
            <Text style={styles.text}>
                {item}
            </Text>
        </PrimaryShadow>
    </Pressable>
  )
}

export default CardCategories

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:colors.grey1,
        marginHorizontal:'5%',
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        fontSize:16
    }
})