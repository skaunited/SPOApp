import React from 'react'; 
import {Text, StyleSheet, TouchableOpacity} from 'react-native'; 

const Button = ({ onPress, children }) => {
    return(
        <TouchableOpacity onPress= {onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        marginTop: 10, 
        padding: 10, 
        width:'40%', 
        backgroundColor:'#00aeef',
        borderRadius:4, 
        alignItems: 'center',
    }, 
    text:{
        color: '#FFFFFF', 
        fontSize:18,
    }
});

export { Button };