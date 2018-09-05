import React, {Component} from "react";
import {Button} from "./Button";
import {Input} from "./Input";

import{
    View, 
    Text,
    StyleSheet,
} from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        
      }
  
    onPressSignIN(){
    
    }
    renderCurrentState(){
        return(
          <View style = {styles.form}>
            <Text>Welcome To Your Home </Text>
          </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderCurrentState()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    form:{
        paddingTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize:24,
        color:'#000',
    }
});