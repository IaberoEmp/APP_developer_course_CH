import { FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Products from '../components/Products'
import Search from '../components/Search'
import { useGetProductByCategoryQuery } from '../app/services/shop'

const ProductList = ({route,navigation}) => {
  
  const {categorySelected} = route.params
  const {data:products,isError,error,isLoading,isSuccess} = useGetProductByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keywordSearch,setKeywordSearch] = useState("")
  const handlerKeywordSearch = (k)=>{
    setKeywordSearch(k)}
    
  useEffect(()=>{
    setProductsFiltered(products)
    if(keywordSearch) setProductsFiltered(products.filter(product => {
      const productLower=product.title.toLowerCase()
      const keywordSearchLower=keywordSearch.toLowerCase()
      return productLower.includes(keywordSearchLower)
    }))
    },[categorySelected,keywordSearch,products])
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
