import React,{Component} from "react";
import
{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'
export default class Drawercontent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profilecontainer}>
                <View style={styles.profileicon}>
                <Image style= {styles.profileimage}
                source={require('../../src/assets/images/icon.png')}></Image>
                </View>
                 <View style={styles.infoview}>
                    <Text>Narnia</Text>
                    <Text>narnia@gamil.com</Text>
                    <Text>0123456789</Text>
                 </View>
                </View>
                 
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
                <Text style={styles.menu}
                onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'White',
        
    },
    menu:
    {
        fontSize:18,
        marginTop:10,
        marginLeft:10,
        color:'blue',
        fontWeight:'bold'
    },
    profilecontainer:{
        height:'25%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center'
    
        
    },
    profileicon:{
         height:100,
         width:100,
         backgroundColor:'#bbbbbb',
         borderRadius:50,
         marginTop:10,
         marginLeft:10
    },
    infoview:
    {
        marginLeft:20 
    },
    profileimage:{
        height:'100%',
        width:'100%'
    }
    
})