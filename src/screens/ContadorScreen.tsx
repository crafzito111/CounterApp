import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function ContadorScreen() {
  const [contador, setContador] = useState(10);

  const handleSuma = () => {
    setContador(prevState => prevState + 1);
  };

  const handleResta = () => {
    setContador(prevState => {
      return prevState - 1;
    });
  };

  const handleClear = () => {
    setContador(() => 10);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {contador}
      </Text>
    
        <TouchableOpacity onPress={handleSuma}>
         <View style={{
            backgroundColor:'red', 
            borderRadius: 100
         }}>
         <Text>+1</Text>
         </View>
        </TouchableOpacity>
      
    </View>
  );
}
