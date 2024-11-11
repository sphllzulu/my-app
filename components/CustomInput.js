import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const CustomInput = ({name,onChange}) => {
    // console.log(num,name)
  return (
        <View style={styles.inputContainer}>
        
        <Text style={styles.label}>{name}</Text>
        
              <TextInput 
                style={styles.input} 
                placeholder={name}
                placeholderTextColor="#717171"
                // secureTextEntry={true}
                onChangeText={(text) => {onChange(text)}}
              />
      </View>

      
   
    
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#bdbdbd",
        backgroundColor: "#fff",
        borderRadius: 5,
        color: "#000"
      },
      label: {
        color: '#bdbdbd',
        marginLeft: 12,
        marginTop: 8
      },
      inputContainer: {
        backgroundColor: 'transparent',
      },
})