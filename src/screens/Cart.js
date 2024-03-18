import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../utils/globals/fonts'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart)
  const localId = useSelector((state)=>state.auth.localId)
  const [triggerAddOrder] = usePostOrderMutation(localId) 
  const handlerAddOrder = async ()=> {
    const createdAt = new Date().toLocaleString()
    const order = {
      createdAt,
      ...cart
    }
    await triggerAddOrder({localId,order})
    dispatch(deleteCart())
  }

  return (
    <View style={styles.container}>
      <View style={styles.confirmContainer}>
        <Pressable onPress={handlerAddOrder}>
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