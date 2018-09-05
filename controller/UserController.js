import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey:'AIzaSyBqsiCf58sBtSlxxoywxrEih5H1qFNjZLA',
  authDomain:'spodb-db.firebaseapp.com',
  databaseURL:'https://spodb-db.firebaseio.com/',
});

module.exports ={
  signUpUser:function(email, password,firstname,lastname,username){
        try{
          if(password < 8 ){
            alert('please enter at least 8 characters ');
            return;
          }
          firebase.auth().createUserWithEmailAndPassword(email,password);
          var UsersRef = firebase.database().ref('Users');
          var UserObject = {
                    firstname         : firstname,
                    lastname          : lastname,
                    username          : username, 
                    email             : email, 
           };
        UsersRef.push(UserObject);
        return true;
    }catch(error){
          alert('user already have account'+ error.toString());
          return false
        }
    }, 
    signInUser:function(email,password){
       try{
            firebase.auth().signInWithEmailAndPassword(email, password);
            return true;
       } catch(error){
            alert('wrong email or password'+ error.toString());
            return false
       }
    }
}