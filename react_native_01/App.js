/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.subView}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.anothersubView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor: 'green',
    // paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%'
  },
  anothersubView: {
    flex: 2,
    backgroundColor: 'yellow',
    // marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})


export default App;
