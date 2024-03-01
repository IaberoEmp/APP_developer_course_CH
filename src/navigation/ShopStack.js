import Home from '../screens/Home'
import CategoryList from '../screens/CategoryList'
import ProductList from '../screens/ProductList'
import ProductDetails from '../screens/ProductDetails'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route,navigation})=>{
                return {
                    header:()=>{
                        return <Header 
                                navigation={navigation} 
                                tittle={
                                    route.name === 'Home'? "Miia Marketplace":
                                    route.name === 'CategoryList'? route.params.storeSelected:
                                    route.name === 'ProductList'? route.params.categorySelected:
                                    "Details"
                            }/>
                        }
                    }
                }
            }
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="CategoryList" component={CategoryList}/>
            <Stack.Screen name="ProductList" component={ProductList}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    )
}

export default ShopStack
