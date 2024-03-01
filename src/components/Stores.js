import { StyleSheet, View,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import stores from '../utils/data/stores.json'
import CardStores from './CardStores'
import Search from './Search'

const Stores = ({navigation}) => {
  
  const [storeFiltered,setStoresFiltered] = useState("")
  const [keywordSearch,setKeywordSearch] = useState("")
  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)
  }
  useEffect(()=>{
    if(keywordSearch) setStoresFiltered(stores.filter(store => {
      const storesLower=store.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return storesLower.includes(keywordSearchLower)
    }))
  },[keywordSearch])
  
  return (
    <View>
      <Search handlerKeywordSearch={handlerKeywordSearch}/>
      <FlatList
            data={keywordSearch? storeFiltered:stores}
            keyExtractor={item => item}
            renderItem={({item})=> <CardStores item={item} navigation={navigation}/>}
        />
      </View>
  )
}

export default Stores

