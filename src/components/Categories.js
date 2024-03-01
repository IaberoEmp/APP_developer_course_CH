import { StyleSheet, Text,Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Categories = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductList",{categorySelected:item.title})} style={styles.container}>
      <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode='cover'/>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width:'90%',
    backgroundColor:colors.grey2,
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
    fontSize:20,
    fontFamily:fonts.PacificoRegular,
    textTransform:'capitalize'
  },
  image:{
    width:90,
    height:90
  }
})