import { View,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useGetStoresQuery } from '../app/services/shop'
import CardStores from './CardStores'
import Search from './Search'

const Stores = ({navigation}) => {
  
  const {data:stores,isError,error,isLoading,isSuccess} = useGetStoresQuery()
  const [storeFiltered,setStoresFiltered] = useState([])
  const [keywordSearch,setKeywordSearch] = useState("")
  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)
  }
  useEffect(()=>{
    setStoresFiltered(stores)
    if(keywordSearch) setStoresFiltered(stores.filter(store => {
      const storesLower=store.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return storesLower.includes(keywordSearchLower)
    }))
  },[keywordSearch,stores])
  
  return (
    <View>
      <Search handlerKeywordSearch={handlerKeywordSearch}/>
      <FlatList
            data={storeFiltered}
            keyExtractor={item => item}
            renderItem={({item})=> <CardStores item={item} navigation={navigation}/>}
        />
      </View>
  )
}

export default Stores

