import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
 
const MainNavigation = () => {

    const user = useSelector((state)=>state.auth)

    useEffect(()=>{
        console.log(user.idToken)
        console.log(user)
    },[user])

    return (
        <NavigationContainer>
            {user.idToken ? <TabNavigation/> : <AuthStack/>}
        </NavigationContainer>
    )
}


export default MainNavigation

