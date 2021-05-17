/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numList'
import { View, Text, StyleSheet, ScrollView} from 'react-native';

class App extends Component{

  state = {
    appName: 'My First App',
    random: [36, 999],
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return{
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (idx) => {
    const newArray = this.state.random.filter((num, index)=>{
      return idx != index;
    })// filter는 반복도 할 수 있으며, 위에 조건을 return해서 조건에 맞는 값이면 지울 수 있음
    this.setState({
      random: newArray
    })
  }

  render(){
    return(
      <View style={styles.mainView}>
        <Header name={this.state.appName}></Header>
        <View>
          <Text style={styles.mainText} onPress={()=>alert("Text Touch Event")}>Hello World</Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        {/* <ScrollView style={{width:'100%'}} onMomentumScrollBegin={()=>alert("begin")}> */}
        {/* <ScrollView style={{width:'100%'}} onMomentumScrollEnd={()=>alert("end")}> */}
        {/* <ScrollView style={{width:'100%'}} onScroll={()=>alert("scroll")}> */}
        {/* <ScrollView style={{width:'100%'}} onContentSizeChange={(width, height)=>alert(height)}> */}
        {/*
          Android is not bounce however this site is perfect solution 
          https://stackoverflow.com/questions/40758635/ios-like-over-scroll-effect-on-android 
        */}
        <ScrollView style={{width:'100%'}} bounces={false}>
          <NumList num={this.state.random} delete={this.onNumDelete}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    backgroundColor: 'white',
    // paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anothersubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})


export default App;
