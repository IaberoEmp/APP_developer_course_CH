import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import SubmitButton from '../components/SubmitButton'
import InputForm from '../components/InputForm'
import { useRegisterMutation } from '../app/services/auth'
import { registerUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { registerSchema, loginSchema} from '../utils/validations/authSchema'

const SignUp = ({navigation}) => {
    
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()
    const [errorEmailSchema,setErrorEmailSchema] = useState("")
    const [errorPasswordSchema,setErrorPasswordSchema] = useState("")
    const [errorConfirmPasswordSchema,setErrorConfirmPasswordSchema] = useState("")

    const onSubmit = async ()=> {
        try {
            //confirmPasswordSchema.validateSync({confirmPassword})
            registerSchema.validateSync({email,password,confirmPassword})
            //passwordSchema.validateSync({password})
            const {data} = await triggerRegister({email,password})
            dispatch(registerUser({email:data.email,idToken:data.idToken,localId:data.localId}))
        } catch (error) {
            setErrorEmailSchema("")
            setErrorConfirmPasswordSchema("")
            setErrorPasswordSchema("")
            switch(error.path){
                case "email":
                    setErrorEmailSchema(error.message)
                    break
                case "password":
                    setErrorPasswordSchema(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirmPasswordSchema(error.message)
                    break
                default:
                    break
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign Up to start
                </Text>
                <InputForm
                    label='Email'
                    value={email}
                    onChangeText={(t)=>setEmail(t)}
                    isSecure={false}
                    error={errorEmailSchema}
                />
                <InputForm
                    label='Password'
                    value={password}
                    onChangeText={(t)=>setPassword(t)}
                    isSecure={true}
                    error={errorPasswordSchema}
                />
                <InputForm
                    label='Confirm Password'
                    value={confirmPassword}
                    onChangeText={(t)=>setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirmPasswordSchema}
                />
                <SubmitButton onPress={onSubmit} title='Sign Up'/>
                <Text style={styles.sub}>Have an account?</Text>
                <Pressable onPress={()=> navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SignUp

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