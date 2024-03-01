import { StyleSheet,View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import ProfileStack from './ProfileStack'
import colors from '../utils/globals/colors'
import {TabBarIconFontAwesome5, TabBarIconFontAwesome6, TabBarIconMaterialCommunityIcons} from '../components/TabBarIcon'

const Tab = createBottomTabNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar,
                    tabBarHideOnKeyboard:true,
                }}
            >
                <Tab.Screen 
                    name='ShopStack' 
                    component={ShopStack} 
                    options={{
                        tabBarIcon: ({focused})=> <TabBarIconMaterialCommunityIcons nameIcon='shopping' title='Shops' focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='OrderStack' 
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({focused})=> <TabBarIconFontAwesome5 nameIcon='list-alt' title='Orders' focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused})=> <TabBarIconFontAwesome6 nameIcon='cart-shopping' title='Cart' focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused})=> <TabBarIconFontAwesome5 nameIcon='user-alt' title='Profile' focused={focused}/>
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.black1,
        shadowColor:'black',
        height:80,
        elevation:4,
        position:'absolute',
        bottom:5,
        left:5,
        right:5,
        borderRadius:10,
        /*Shadow iOS*/
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.23,
        shadowRadius:2.62
    }
})