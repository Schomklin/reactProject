import { View, Text,TextInput } from 'react-native'
import React from 'react'

const Cat = () => {
  return (
    <View>
      <Text>Hello,I am...</Text>
      <TextInput
        style={{
            height:40,
            borderColor:'gray',
            borderWidth:1
        }}      
      />
    </View>
  )
}

export default Cat