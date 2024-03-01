import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryByStore = ({item}) => {

  return (
    <View><Text>{item.title}</Text></View>
  )
}

export default CategoryByStore

const styles = StyleSheet.create({
  
})