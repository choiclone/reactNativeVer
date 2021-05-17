 import React from 'react';
 import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
 
 const NumList = (props) => {
     return (
         props.num.map((item, idx)=>(
            <TouchableOpacity style={styles.numlist} key={idx} onPress={()=>props.delete(idx)}>
                <Text>{item}</Text>
            </TouchableOpacity>
         ))
     )
 }
 
 const styles = StyleSheet.create({
     numlist: {
         backgroundColor: '#cecece',
         alignItems: 'center',
         padding: 5,
         width: '100%',
         marginTop: 5
     }
 })
 
 
 export default NumList;
  