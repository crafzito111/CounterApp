import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}> 
      <Text style={{
        fontSize: 45
      }}>Hola Mundo</Text>
    </View>
  )
}