import { Keyboard, Pressable, StyleSheet, TextInput, View,Text } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import { useState } from 'react'


const Search = ({handlerKeywordSearch}) => {
  
    const [searchInput,setSearchInput] = useState("");
    const [regexpError,setRegexpError] = useState("");
    const handlerSearchInput = (t)=>setSearchInput(t);
    const search = ()=>{
      const regularExpressions = /[^a-zA-Z0-9 \-_]/
      if(regularExpressions.test(searchInput)){
        setRegexpError("Caracteres no validos")
        return 
      }
      setRegexpError("")
      handlerKeywordSearch(searchInput)
      Keyboard.dismiss()
    };

    const resetSearch = ()=>{
      handlerKeywordSearch("")
      handlerSearchInput("")
      setRegexpError("")
    }
  
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder='Search'
          placeholderTextColor={colors.grey1}
          color={colors.grey1}
          style={styles.search}
          value={searchInput}
          onChangeText={handlerSearchInput}
        />
        <Pressable onPress={search}>
          <AntDesign name='search1' size={35} color={colors.grey1}/>
        </Pressable>
        <Pressable onPress={resetSearch}>
          <AntDesign name='closecircleo' size={30} color={colors.grey1}/>
        </Pressable>
      </View>
      {regexpError ? <Text style={styles.errorText}>{regexpError}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    search:{
        borderWidth:2,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:15,
        marginHorizontal:5,
        marginVertical:2,
        flex:1,
        borderColor:colors.grey1
    },
    container:{
        backgroundColor:colors.black1,
        flexDirection:'row',
        alignItems:'center',
        padding:5

    },
    errorText:{
      paddingHorizontal:10,
      fontStyle:'italic',
      color:colors.grey3,
      fontSize:10
    }
})