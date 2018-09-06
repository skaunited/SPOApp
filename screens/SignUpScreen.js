import React, {Component} from "react";
import{
    View, 
    Text,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import {Button} from "./Button";
import {Input} from "./Input";
var UserContoller = require('../controller/UserController.js');
export default class SignUpScreen extends React.Component{
    static navigationOptions = {
        title: 'Create Your Free Account',
        headerStyle: { backgroundColor: '#0076A4' },
        headerTitleStyle: { color: 'white', fontSize:14, },
        tintColor: {color:'white'},
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
            <Image 
            style = {styles.logo}
            source={require('../img/spoone.png')}
            />
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
              placeholder='Enter your password...'
              label='Password'
              secureTextEntry
              onChangeText = {(password) => this.setState({ password })}
            />
            <Text style={styles.underIput2}>{'At least 8 characters.'}</Text>
            <Input
              placeholder='Enter your Email...'
              label='Email'
              onChangeText = {(email) => this.setState({ email })}
            />
            <Text style={styles.underIput}>{'An activation link will send to this email.'}</Text>
            <Text style={styles.terms}>{' By Clicking Submit, I agree that I have read and accept the' }</Text>
            <Text style={styles.termsandconditions}>{'Terms and Conditions.'}</Text>
            <Button onPress= {() => this.onPressSignUp()}>SUBMIT</Button>
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
   form:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
   },
   container:{
    height:'100%',
   },
   logo:{
     marginTop:15,
   },
   underIput:{
     fontSize:10,
     color:'gray',
     justifyContent:'flex-start',
     alignItems: 'flex-start',
     marginLeft:'-22%',
   },
   underIput2:{
    fontSize:10,
    color:'gray',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginLeft:'-45%',
   },
   terms:{
     fontSize:10,
     color:'black',
     paddingTop:14,
     marginLeft:5,
   },
   termsandconditions:{
     color:'blue',
     fontSize:10,
     marginLeft:'-45%',
     paddingTop:14,
   }
});