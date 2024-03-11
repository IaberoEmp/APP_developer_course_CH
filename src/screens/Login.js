import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { registerUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = ({navigation}) => {
    
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [triggerLogin] = useLoginMutation()

    const onSubmit = async ()=> {
        const {data} = await triggerLogin({email,password})
        console.log({email:data.email,idToken:data.idToken})
        dispatch(registerUser({email:data.email,idToken:data.idToken}))
    }


    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Login to start
                </Text>
                <InputForm
                    label='Email'
                    value={email}
                    onChangeText={(t)=>setEmail(t)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label='Password'
                    value={password}
                    onChangeText={(t)=>setPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title='Log In'/>
                <Text style={styles.sub}>Not have an account?</Text>
                <Pressable onPress={()=> navigation.navigate("SignUp")}>
                    <Text style={styles.subLink}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width:'90%',
        backgroundColor:colors.black1,
        gap:15,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20
    },
    title:{
        fontSize:22,
        fontFamily:fonts.LobsterRegular,
        color:'white'
    },
    sub:{
        fontSize:14,
        fontFamily:fonts.PacificoRegular,
        color:colors.grey1
    },
    subLink:{
        fontSize:14,
        fontFamily:fonts.SatisfyRegular,
        color:colors.orange1
    }
})