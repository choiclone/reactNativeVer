import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
 
 class ModalComponent extends Component{

    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false: true
        })
    }
   render(){
        return(
            <View style={{width: '100%'}}>
                <Button title="openModal" onPress={this.handleModal}/>
                {/* <Modal visible={this.state.modal} animationType={'fade'}> */}
                <Modal visible={this.state.modal} animationType={'slide'} onShow={()=>alert("warning")}>
                {/* <Modal visible={this.state.modal} animationType={'none'}> */}
                    <View style={{marginTop: 60, backgroundColor: 'red'}}>
                        <Text>This is Modal Content</Text>
                    </View>
                    <Button title="GoBack" onPress={this.handleModal}/>
                </Modal>
            </View>
        );
    }
 }
 
 const styles = StyleSheet.create({
 })
 
 
 export default ModalComponent;
 