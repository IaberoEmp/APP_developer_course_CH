import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons' 
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { addCartItem, deleteCartItem } from '../features/cart/cartSlice'
import CounterCart from './CounterCart'

const CartItem = ({item}) => {

    const dispatch = useDispatch()
    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...item,quantity}))
    }

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode='cover'/>
            <View style={styles.textContainer}> 
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Unit price: ${item.price}</Text>
            </View>
            <View style={styles.counter}>
                <Pressable style={styles.trashIcon} onPress={()=>dispatch(deleteCartItem(item.id))}>
                    <FontAwesome5 name='trash' size={30} color={colors.black1}/>
                </Pressable>
                <CounterCart item={item}/>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    textContainer:{
        width:'70%'
    },
    text:{
        color:colors.grey3,
        fontSize:17,
        fontFamily:fonts.LobsterRegular
    },
    text2:{
        color:colors.grey3,
        fontSize:14,
        fontFamily:fonts.SatisfyRegular
    },
    card:{
        alignItems:'center',
        height:100,
        justifyContent:'space-between',
        backgroundColor:colors.grey1,
        padding:10,
        margin:5,
        borderWidth:2,
        borderRadius:10,
        flexDirection:'row'
    },
    image:{
        width:70,
        height:70,
        borderWidth:1,
        borderColor:colors.grey2,
        borderRadius:5,
        marginRight:10
    },
    counter:{
        flexDirection:'column',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        position:'relative',
        right:25
    },trashIcon:{
        right:10
    }
})