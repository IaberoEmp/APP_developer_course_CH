import { StyleSheet, View, Button,Text, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { Entypo,FontAwesome6 } from '@expo/vector-icons'
import colors from '../utils/globals/colors'


const Counter = ({initialValue,textButton,product}) => {

    const [count,setCount] = useState(initialValue)
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...product,quantity}))
        setCount(1)
    }

    return (
        <View style={styles.counterContainer}>
            <Pressable title='+' onPress={()=> setCount(count + 1) }>
                <Entypo name='plus' size={30} color={colors.black1}/>
            </Pressable>
            <Text style={styles.text}>{count}</Text>
            <Pressable title='-'  onPress={ ()=> setCount(count - 1) }>
                <Entypo name='minus' size={30} color={colors.black1}/>
            </Pressable>   
            <Pressable title={textButton} onPress={()=>handlerAddCartItem(count)}>
                <View style={styles.cartIcon}>
                    <FontAwesome6 name='cart-shopping' size={30} color={colors.black1}/>
                    <Text style={styles.cartIconText}>{textButton}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer:{
        width:200,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center",
        gap:-10,
        margin:10
    },
    text:{
        width:50,
        textAlign:"center",
        fontSize:15
    },
    cartIcon:{
        flexDirection:"row",
        gap:5,
        alignItems:'center',
        marginLeft:10
    },
    cartIconText:{
        fontSize:15,
    }
})