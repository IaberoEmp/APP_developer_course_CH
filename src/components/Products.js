import { StyleSheet, Text, Pressable,Image } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Products = ({item,navigation}) => {

  return (
    <Pressable onPress={()=>navigation.navigate("ProductDetails",{productId:item.id})} style={styles.container}>
      <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode='cover'/>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default Products

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:colors.grey3,
        marginHorizontal:'5%',
        marginVertical:10,
        padding:20,
        flexDirection:'row',
        alignItems:"center",
        borderRadius:10,
        gap:20
    },
    text:{
        width:'60%',
        fontSize:16,
        fontFamily:fonts.PacificoRegular,
        textTransform:'capitalize',
        color:'white'
    },
    image:{
        width:90,
        height:90
    }
})