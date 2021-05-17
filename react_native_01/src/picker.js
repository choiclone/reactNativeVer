/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';
 
 class PickerComponent extends Component{

    state = {
        country: 'korea',
        value: 50
    }

    slideValueChange = (value) => {
        this.setState({
            value: value
        })
    }

   render(){
        return(
            <View style={styles.container}>
                <Slider style={{height: 40, width: 300}} value={this.state.value} minimumValue={0} maximumValue={100} onValueChange={this.slideValueChange} minimumTrackTintColor='blue' maximumTrackTintColor='red' step={1}/>
                <Text style={styles.input}>{this.state.value}</Text>
                <ActivityIndicator style={{paddingTop: 200}} size="large" color="green" animating={true}/>
                {/* <ActivityIndicator style={{paddingTop: 200}} size="large" color="green" animating={false}/> loading animation not used */}
                <Picker style={{width: 250, height: 50}} selectedValue={this.state.country} onValueChange={(val, idx)=>
                    this.setState({country: val})
                }>
                    <Picker.Item label="Korea" value="korea"/>
                    <Picker.Item label="Canada" value="canada"/>
                </Picker>
            </View>
        );
    }
 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingTop: 20,
         marginBottom: 200,
         alignItems: 'center'
     },
     input: {
         width: '100%',
         marginTop: 20,
         fontSize: 25,
     }
 })
 
 
 export default PickerComponent;
 