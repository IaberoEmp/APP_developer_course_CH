import { StyleSheet, View } from 'react-native'
import React from 'react'
import Stores from '../components/Stores'

const Home = ({navigation}) => {
  
  return (
    <View>
      <View style={styles.content}>
      </View>
        <Stores navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  content:{
    flexDirection:'row',
  }
})