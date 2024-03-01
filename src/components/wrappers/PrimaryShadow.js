import { StyleSheet, View } from 'react-native'

const PrimaryShadow = ({children,style}) => {
  return (
    <View style={[styles.container,style]}>
        {children}
    </View>
  )
}

export default PrimaryShadow

const styles = StyleSheet.create({
    container:{
        /*Andorid*/
        elevation:15,
        /*iOS*/
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:6
        },
        shadowOpacity:0.39,
        shadowRadius:8.30
    }
})