import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import {MaterialCommunityIcons,FontAwesome6,FontAwesome5} from '@expo/vector-icons' 

const TabBarIcon = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default TabBarIcon

const TabBarIconMaterialCommunityIcons = ({title,nameIcon,focused}) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={nameIcon} size={35} color={focused ? colors.grey1 : colors.grey3}/>
            <Text style={[styles.text,!focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

const TabBarIconFontAwesome6 = ({title,nameIcon,focused}) => {
    return (
        <View style={styles.container}>
            <FontAwesome6 name={nameIcon} size={35} color={focused ? colors.grey1 : colors.grey3}/>
            <Text style={[styles.text,!focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

const TabBarIconFontAwesome5 = ({title,nameIcon,focused}) => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={nameIcon} size={35} color={focused ? colors.grey1 : colors.grey3}/>
            <Text style={[styles.text,!focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export {TabBarIconMaterialCommunityIcons,TabBarIconFontAwesome5,TabBarIconFontAwesome6}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    text:{
        color:colors.grey1,
        textAlign:'center',
        fontSize:15
    },
    textFocused:{
        color:colors.grey3
    }
})