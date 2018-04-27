import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { firebaseConfig } from './config/firebase'
import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)
export default class App extends React.Component {
  state = {
    title:'',
    body:'',
    notes:null
  }
componentDidMount = ()=>{
  
  firebase.database().ref('notes').on('value',(snapshot)=>{
    let notes = []
    snapshot.forEach((child)=>{
      console.log(child.val().body)
      notes.push(child)
    })
    this.setState({notes})
  })
}
  saveToFirebase = ()=>{
    console.log("notes=",this.state.notes)
    const {title,body} = this.state
    firebase.database().ref('notes').push({
      title:title,
      body:body
    })
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center'}}>
       <TextInput placeholder="Title" onChangeText={(title)=>this.setState({title})} value={this.state.title}/>
       <TextInput placeholder="Body" onChangeText={(body)=>this.setState({body})} value={this.state.body}/>
      <Button title="Save to firebase" onPress={this.saveToFirebase}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
