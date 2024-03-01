import { StyleSheet,StatusBar} from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigation from './src/navigation/MainNavigation'
import { store } from './src/app/store'
import { Provider } from 'react-redux'


const App = () => {
  const[fontsLoaded]=useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.black1}/>
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
