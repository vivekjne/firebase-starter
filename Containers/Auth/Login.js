import React,{Component} from 'react'
import {View,ToastAndroid} from 'react-native'
import { TextInput,Button,Text } from '@shoutem/ui'
import * as firebase from 'firebase'
export default class Login extends Component{
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      state={
        email:'',
        password:'',
        error:''
    }

    _login=async()=>{
        if(this.state.email && this.state.password){
            let {email,password} = this.state
            try{
            let auth =  await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log(auth)
            if(auth){
                ToastAndroid.show('Login Successful',ToastAndroid.LONG)
                this.props.navigation.replace('Display')
            }
            }catch(err){
                console.log(err.message)
                this.setState({error:`*${err.message}`})
            }
        }
      }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
               <Text style={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
                <TextInput placeholder="Email" onChangeText={(email)=>this.setState({email})} value={this.state.email}/>
                
                <TextInput placeholder="Password" onChangeText={(password)=>this.setState({password})} value={this.state.password}/>
                    <Button styleName="dark" onPress={this._login}>
                        <Text>Login</Text>
                    </Button>

            </View>
        )
    }
}