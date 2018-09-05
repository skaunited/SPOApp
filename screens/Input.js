import React from 'react';
import {View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    width:'100%',
  },
  label:{
    padding:10,
    marginBottom:5,
    marginLeft:36,
    paddingBottom: 0,
    color: '#000',
    fontSize:13,
    fontWeight:'700',
    width:'100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  input:{

    justifyContent: 'center',
    alignItems: 'center',

    borderColor:'#1B1616',
    borderWidth:1,
    borderRadius:3,
    paddingBottom:2,
    color:'black',
    fontSize:13,
    height:39,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft:50,
    marginRight:50,
  }
});

export {Input};
