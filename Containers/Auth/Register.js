import React,{Component} from 'react'
import {View,KeyboardAvoidingView,ToastAndroid} from 'react-native'
import { TextInput,Button,Text } from '@shoutem/ui'
import * as firebase from 'firebase'
export default class Register extends Component{
    static navigationOptions = {
        title: 'Register',
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

      _register=async()=>{
        if(this.state.email && this.state.password){
            let {email,password} = this.state
            try{
            let auth =  await firebase.auth().createUserWithEmailAndPassword(email,password)
            console.log(auth)
            if(auth){
                ToastAndroid.show('Registration Successful',ToastAndroid.LONG)
            }
            }catch(err){
                console.log(err.message)
                this.setState({error:`*${err.message}`})
            }
        }
      }
    render(){
        return(
            <KeyboardAvoidingView style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
            <Text style={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
                <TextInput placeholder="Email" onChangeText={(email)=>this.setState({email})} value={this.state.email}/>
                
                <TextInput placeholder="Password" onChangeText={(password)=>this.setState({password})} value={this.state.password}/>
                    <Button styleName="dark" onPress={this._register}>
                        <Text>Register</Text>
                    </Button>

            </KeyboardAvoidingView>
        )
    }
}