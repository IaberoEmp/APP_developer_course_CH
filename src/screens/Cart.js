import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../utils/globals/fonts'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector((state)=> state.cart)

  return (
    <View style={styles.container}>
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
      </View>
      <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between'
  },
  confirmContainer:{
    flexDirection:'row',
    backgroundColor:'grey',
    padding:25,
    justifyContent:'space-between'
  },
  confirmText:{
    fontFamily:fonts.LobsterRegular,
    fontSize:18,
    color:'white'
  }
})