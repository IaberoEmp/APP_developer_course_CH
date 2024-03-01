import { StyleSheet, View,Text, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { Entypo } from '@expo/vector-icons'
import colors from '../utils/globals/colors'

const CounterCart = ({item}) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.counterContainer}>
            <Pressable title='+' onPress={()=> dispatch(addCartItem({...item,quantity:1})) }>
                <Entypo name='plus' size={15} color={colors.black1}/>
            </Pressable>    
            <Text style={styles.text}>{item.quantity}</Text>
            <Pressable title='-'  onPress={ ()=> dispatch(addCartItem({...item,quantity:-1})) }>
                <Entypo name='minus' size={15} color={colors.black1}/>
            </Pressable>   
        </View>
    )
}

export default CounterCart

const styles = StyleSheet.create({
    counterContainer:{
        width:100,
        flexDirection:"row",
        alignItems:"center",
        margin:10
    },
    text:{
        width:50,
        textAlign:"center"
    }
})