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
import Input from './src/input'
import PickerComponent from './src/picker'
import ModalComponent from './src/modal'
import ahcha from './asset/images/ahcha.jpg'
import { View, Text, StyleSheet, ScrollView, Button, TextInput, Image} from 'react-native';

class App extends Component{

  // state = {
  //   appName: 'My First App',
  //   random: [36, 999],
  // }

  // onAddRandomNum = () => {
  //   const randomNum = Math.floor(Math.random()*100)+1;
  //   this.setState(prevState => {
  //     return{
  //       random: [...prevState.random, randomNum]
  //     }
  //   })
  // }

  // onNumDelete = (idx) => {
  //   const newArray = this.state.random.filter((num, index)=>{
  //     return idx != index;
  //   })// filter는 반복도 할 수 있으며, 위에 조건을 return해서 조건에 맞는 값이면 지울 수 있음
  //   this.setState({
  //     random: newArray
  //   })
  // }

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    });
  }

  state = {
    myTextInput: "",
    alphabet: ['a', 'b', 'c', 'd']
  }

  onChangeInput = (e) =>{
      this.setState({
          myTextInput: e
      })
  }

  render(){
    return(
      <View style={styles.mainView}>
        <ModalComponent/>
        {/* 자신에 폴더에 이미지가 있을 시 */}
        {/* <Image style={styles.images} source={ahcha} resizeMode='contain'/> 이미지 가져오지만 공간이 남음[가로세로 비율 유지] */}
        {/* <Image style={styles.images} source={ahcha} resizeMode='cover'/> 이미지 자체를 전체로 채움[가로세로 비율 유지] */}

        {/* 서버에서 이미지를 불러올 시 */}
        {/* <Image style={styles.images} source={{uri: 'https://picsum.photos/id/237/200/200'}} resizeMode={'contain'} onLoadEnd={()=>alert("image loaded")}/> */}
        
        {/* <PickerComponent/> */}
        {/* <Header name={this.state.appName}></Header>
        <View>
          <Text style={styles.mainText} onPress={()=>alert("Text Touch Event")}>Hello World</Text>
        </View>
        <Generator add={this.onAddRandomNum}/> */}
        {/* <ScrollView style={{width:'100%'}} onMomentumScrollBegin={()=>alert("begin")}> */}
        {/* <ScrollView style={{width:'100%'}} onMomentumScrollEnd={()=>alert("end")}> */}
        {/* <ScrollView style={{width:'100%'}} onScroll={()=>alert("scroll")}> */}
        {/* <ScrollView style={{width:'100%'}} onContentSizeChange={(width, height)=>alert(height)}> */}
        {/*
          Android is not bounce however this site is perfect solution 
          https://stackoverflow.com/questions/40758635/ios-like-over-scroll-effect-on-android 
        */}
        {/* <ScrollView style={{width:'100%'}} bounces={false}>
          <NumList num={this.state.random} delete={this.onNumDelete}/>
        </ScrollView> */}
        {/* <TextInput 
            value={this.state.myTextInput} 
            style={styles.input} 
            onChangeText={this.onChangeInput} 
            multiline={true} 
            maxLength={100} 
            autoCapitalize={'none'} 
            editable={true}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput}></Button> */}
        {/* <ScrollView style={{width: '100%'}}>
          {
            this.state.alphabet.map((item, idx) => (
              <Text style={styles.mainText} key={idx}>{item}</Text>
            ))
          }
        </ScrollView> */}
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
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
      width: '100%',
      backgroundColor: "#cecece",
      marginTop: 20,
      fontSize: 25,
      padding: 10,
  },
  images: {
    width: '100%',
    height: 700,
  }
})


export default App;
