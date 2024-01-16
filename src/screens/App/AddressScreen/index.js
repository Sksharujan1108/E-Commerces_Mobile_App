import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AddressScreen = () => {
  return (
    <ScrollView style = {{ marginTop: 50 }}>
      <View style = {{height:50, backgroundColor: '#00CED1'}} />

        <View style = {{ padding: 10 }}>     
          <Text style = {{ fontSize: 17, fontWeight: 'bold' }}> Add a New Address </Text>
        </View>

        <TextInput
          placeholderTextColor = {'black'}
          placeholder="Street"
          style = {{
            
          }}
        />

        
        
    </ScrollView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})