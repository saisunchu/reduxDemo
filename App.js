import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './src/reducers'
import { Provider } from "react-redux";
import NameDemo from './src/screens/NameDemo';

const App = () => {
  return (
    <Provider store={store} >
      <View style={{flex:1}}>
        <NameDemo />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})