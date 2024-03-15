import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const InputForm = ({label,onChangeText,value,isSecure,error}) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput 
                value={value} 
                onChangeText={onChangeText} 
                style={styles.input}
                secureTextEntry={isSecure}
            />
            {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:'100%'
    },
    input:{
        width:'90%',
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:colors.orange1,
        padding:2,
        fontFamily:fonts.LobsterRegular,
        fontSize:14,
        marginHorizontal:'5%',
        marginVertical:10,
        color:colors.orange1
    },
    titleInput:{
        width:'90%',
        marginHorizontal:'5%',
        fontSize:16,
        fontFamily:fonts.LobsterRegular,
        color:"white"
    },
    error:{
        fontSize:10,
        color:"red",
        fontFamily:fonts.PacificoRegular,
        marginLeft:20,
        fontStyle:'italic'
    }
})