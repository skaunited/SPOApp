import React, {Component} from "react";
import {Button} from "./Button";
import {Input} from "./Input";

import{
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';
var UserContoller = require('../controller/UserController.js');
export default class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Login To Your SPO Account',
        headerStyle: { backgroundColor: '#0076A4' },
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
        <ImageBackground 
        style={styles.container}
        source={require('../img/internet.jpg')}    
        >
          <View style = {styles.form}>
          <Image 
          style = {styles.logo}
          source={require('../img/spoone.png')}
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
            <Button onPress= {() => this.onPressSignIN()}>Log In</Button>
            <Button onPress= {() =>this.props.navigation.navigate('SignUp')}>Sign UP</Button>
          </View>
          </ImageBackground>

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
      },
      form:{
        flex: 1,
        marginTop:'20%',
        justifyContent: 'center',
        alignItems: 'center',

      }, 
      logo:{
          marginTop:0,
      }, 
      container:{
          height:'100%',
      }
});