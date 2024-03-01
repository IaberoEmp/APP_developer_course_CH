import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={({navigation})=>{
                return {
                    header: ()=> {
                        return <Header
                            tittle='Carrito'
                            navigation={navigation}
                        />
                    }
                }
            }}
        >
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartStack