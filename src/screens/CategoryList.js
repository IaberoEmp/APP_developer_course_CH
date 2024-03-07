import { FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Categories from '../components/Categories'
import Search from '../components/Search'
import { useGetCategoriesQuery } from '../app/services/shop'

const CategoryList = ({route,navigation}) => {
  
  const {storeSelected} = route.params
  const {data:categories,isError,error,isLoading,isSuccess} = useGetCategoriesQuery(storeSelected)
  const [categoriesFiltered,setCategoriesFiltered] = useState([])
  const [keywordSearch,setKeywordSearch] = useState("")

  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)}

  useEffect(()=>{
    //if(storeSelected) setCategoriesFiltered(categories.filter(category => category.store === storeSelected))
    setCategoriesFiltered(categories)
    if(keywordSearch) setCategoriesFiltered(categories.filter(category => {
      const categoryLower=category.title.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return categoryLower.includes(keywordSearchLower)
    }))
  },[storeSelected,keywordSearch,categories])

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
