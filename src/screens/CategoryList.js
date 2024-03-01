import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import categories from '../utils/data/categories.json'
import Categories from '../components/Categories'
import Search from '../components/Search'

const CategoryList = ({route,navigation}) => {
  
  const {storeSelected} = route.params
  const [categoriesFiltered,setCategoriesFiltered] = useState([])
  const [keywordSearch,setKeywordSearch] = useState("")
  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)}

  useEffect(()=>{
    if(storeSelected) setCategoriesFiltered(categories.filter(category => category.store === storeSelected))
    if(keywordSearch) setCategoriesFiltered(categoriesFiltered.filter(category => {
      const categoryLower=category.title.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return categoryLower.includes(keywordSearchLower)
    }))
  },[storeSelected,keywordSearch])

  return (
    <>
      <Search handlerKeywordSearch={handlerKeywordSearch}/>
      <FlatList
        data={categoriesFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <Categories item={item} navigation={navigation}/>}/>
    </>
  )
}

export default CategoryList
