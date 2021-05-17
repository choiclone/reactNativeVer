/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
 
//  exampleFunction = () => {

//  }
 // return 없누

//  exampleFunction = () => (
//     <Text>{this.props.name}</Text>
//  )
 // return 할 수 있네

 const Header = (props) => (
    // <TouchableOpacity style={styles.header} onPress={()=>alert("onPress")}>
    // <TouchableOpacity style={styles.header} onLongPress={()=>alert("onLongPress")}>
    // <TouchableOpacity style={styles.header} onPressIn={()=>alert("onPressIn")}>
    <TouchableOpacity style={styles.header} onPressOut={()=>alert("onPressOut")}>       
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
 );
 
 const styles = StyleSheet.create({
   header: {
     backgroundColor: 'pink',
     alignItems: 'center',
     padding: 5,
     width: '100%'
   }
 })
 
 
 export default Header;
 