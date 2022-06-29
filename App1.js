import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import Stysheet from './components/Stysheet';
import TextInputExample from './components/TextInputExample';
import Cat from './components/Cat';


const App = () => {

  const showData = () => {
    alert("Hello Button")
  }

  return (
    <View>
      <Text>Hello React Native</Text>
      <Logo />
      <Button
        onPress={showData}
        title='Click Me'
      />
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
    </View>
  )
}

export default App



