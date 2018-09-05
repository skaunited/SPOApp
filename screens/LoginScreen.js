import React, {Component} from "react";
import {Button} from "./Button";
import {Input} from "./Input";

import{
    View, 
    Text,
    StyleSheet,
} from 'react-native';
var UserContoller = require('../controller/UserController.js');
export default class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Login To Your SPO Account',
        headerStyle: { backgroundColor: 'blue' },
        headerTitleStyle: { color: 'white' },
    }
    constructor(props){
        super(props)
        this.state = {
          email:'',
          password:'', 
        }
      }
    
    onPressSignIN(){
        if(UserContoller.signInUser(this.state.email,this.state.password)){
            this.props.navigation.navigate('Home');
        }
    }
    renderCurrentState(){
        
        return( 
          <View style = {styles.form}>
            <Input
              placeholder='Enter your Email...'
              label='Email'
              onChangeText = {(email) => this.setState({ email })}
            />
            <Input
              placeholder='Enter your password...'
              label='Password'
              secureTextEntry
              onChangeText = {(password) => this.setState({ password })}
            />
            <Button onPress= {() => this.onPressSignIN()}>Log In</Button>
            <Button onPress= {() =>this.props.navigation.navigate('SignUp')}>Sign UP</Button>
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
    headerView:{
        backgroundColor:'#0E94FA',
        marginBottom:15,
      },
      header:{
        fontSize:20,
        color:'#FFFFFF',
        paddingTop:25,
        paddingBottom:10,
        marginBottom:15,
        marginLeft:30,
      }
});