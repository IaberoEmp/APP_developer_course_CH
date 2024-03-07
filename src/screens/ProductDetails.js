import { StyleSheet, Text, View, FlatList,Image, Pressable,Dimensions } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import Counter from '../components/Counter'
import { useGetProductsQuery } from '../app/services/shop'

const windowWidth = Dimensions.get('window').width; // Obtengo el ancho de la ventana del dispositivo

const ProductDetails = ({route}) => {
  
  const {productId} = route.params
  const {data:product,isLoading} = useGetProductsQuery(productId)

  if(isLoading) return <View><Text>Cargando...</Text></View>

  const carouselImages = ({item}) => {
    return(
      <Image source={{ uri: item }} style={{width:windowWidth,height:300}}/>);// Establezco un ancho fijo para cada imagen
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.carousel}>
          {product.images && product.images.length > 0 ? 
            <FlatList
              data={product?.images? product.images : null}
              renderItem={carouselImages}
              keyExtractor={item => item}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              getItemLayout={(data,index)=>({length:windowWidth,offset:windowWidth * index,index})} // Establezco el tamaño del contenedor de cada elemento de la lista.
            /> 
            : 
            product?.thumbnail ?
              <Image style={styles.image} source={{uri:product.thumbnail}}/>
            :
            <Text>No hay imágenes disponibles</Text>
          }
        </View>
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter
            initialValue={1}
            product={product}
            textButton="Add cart"
          />
        </View>
        <View style={styles.containerPrice}>
          <Pressable style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Producto</Text>
          </Pressable>
          <Pressable style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Eliminar Producto</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    justifyContent:'start',
    alignItems:'center'
  },
  content:{
    width:'100%'
  },
  image:{
    width:windowWidth,
    height:300,
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25,
    fontFamily:fonts.SatisfyRegular, //No se esta viendo, ver porque.
  },
  carousel:{
    height:300,
    width:'100%'
  },
  editButton:{
    backgroundColor:colors.yellow2,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  editButtonText:{
    color:'black'
  },
  deleteButton:{
    backgroundColor:colors.orange3,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  deleteButtonText:{
    color:'white'
  },
  buyButton:{
    backgroundColor:colors.primary,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyButtonText:{
    color:'white'
  },
  containerPrice:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginVertical:10
  },
  title:{
    fontSize:30,
    fontFamily:fonts.PacificoRegular,
    textTransform:'capitalize',
  },
  price:{
    fontSize:30
  }
})