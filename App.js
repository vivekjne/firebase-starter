import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { firebaseConfig } from './config/firebase'
import * as firebase from 'firebase'
import Navigator from './Navigator'
import { Font,AppLoading } from 'expo'
firebase.initializeApp(firebaseConfig)
export default class App extends React.Component {
 state={
   appLoading:true
 }
componentDidMount = async()=>{
  await Font.loadAsync({
    'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
    'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
    'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
    'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
    'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
    'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
    'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
    'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
    'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
    'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
  });

  this.setState({appLoading:false})
}
  
  render() {
    return (
      <View style={{flex:1}}>
      {this.state.appLoading?<AppLoading />:<Navigator />}
        
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
