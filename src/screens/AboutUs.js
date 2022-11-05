import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class AboutUs extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.aboutus}>This is AboutUs page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'white'
    },
    aboutustext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
})