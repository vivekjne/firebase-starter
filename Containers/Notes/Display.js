import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class Display extends Component{
    state={
        notes:null
    }
    static navigationOptions = {
        title: 'Notes',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                {this.state.notes?<View style={{justifyContent:'center'}}><Text>NO Notes found</Text></View>:<View>Display</View>}
            </View>
        )
    }
}