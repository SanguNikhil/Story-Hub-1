import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign:'center', fontSize:30, backgroundColor:'pink'}}>Story Hub</Text>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Story Title"/>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Author"/>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.storyBox}
                    placeholder="Write your story"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink',
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    scanButton:{
        backgroundColor: '#2196F3',
        padding:10,
        margin:10,
    },
    buttonText:{
        fontSize:15,
        textAlign: 'center',
        marginTop:10,
    },
    inputView:{
        flexDirection:'row',
        margin:20,
    },
    inputBox:{
        width:200,
        height:20,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor: 'white',
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth:1.5,
        fontSize:20,
        backgroundColor: 'white',
    },
    scanButton:{
        backgroundColor:'#66BB6A',
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0,
    },
})