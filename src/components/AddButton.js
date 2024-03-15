import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const AddButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity> 
  )
}


export default AddButton


const styles = StyleSheet.create({
    button: {
        backgroundColor:colors.black1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color:colors.grey1,
        fontFamily:fonts.LobsterRegular
    }
})