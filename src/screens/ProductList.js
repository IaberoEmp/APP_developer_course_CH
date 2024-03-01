import { StyleSheet, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../utils/data/products.json'
import Header from '../components/Header'
import Products from '../components/Products'
import Search from '../components/Search'

const ProductList = ({route,navigation}) => {
  
  const {categorySelected} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keywordSearch,setKeywordSearch] = useState("")
  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)}
    
  useEffect(()=>{
    if(categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if(keywordSearch) setProductsFiltered(productsFiltered.filter(product => {
      const productLower=product.title.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return productLower.includes(keywordSearchLower)
    }))
    },[categorySelected,keywordSearch])
    return (
    <>
      <Search handlerKeywordSearch={handlerKeywordSearch}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <Products item={item} navigation={navigation}/>}/>
  </>
  )
}

export default ProductList
