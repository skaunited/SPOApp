import React, {Component} from "react";
import{
    View, 
    Text,
    StyleSheet
} from 'react-native';
import {Button} from "./Button";
import {Input} from "./Input";
var UserContoller = require('../controller/UserController.js');
export default class SignUpScreen extends React.Component{
    static navigationOptions = {
        title: 'Create Your SPO Account',
        headerStyle: { backgroundColor: 'blue' },
        headerTitleStyle: { color: 'white' },
      }
    constructor(props){
        super(props)
        this.state = {
          email:'',
          password:'',
          firstname:'',
          lastname:'',
          username:'',
          authentication: false, 
        }
    }
    
    onPressSignUp = (email, password) => {
        if(UserContoller.signUpUser(this.state.email,this.state.password,this.state.firstname,this.state.lastname,this.state.username)){
            alert('You have been registred');
        }
    }

    renderCurrentState(){
        if(this.state.authentication){
          return(
            <View style = {styles.form}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
        return(
          <View style = {styles.form}>
            <Input
              placeholder='Enter your FirstName...'
              label='First Name'
              onChangeText = {(firstname) => this.setState({ firstname })}
            />
             <Input
              placeholder='Enter your LastName...'
              label='Last Name'
              onChangeText = {(lastname) => this.setState({ lastname })}
            />
            <Input
              placeholder='Enter your Username...'
              label='Usernname'
              onChangeText = {(username) => this.setState({ username })}
            />
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
            <Button onPress= {() => this.onPressSignUp()}>Sign Up</Button>
          </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
            {this.renderCurrentState()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
   
});