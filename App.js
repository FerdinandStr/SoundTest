import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import FetchLocation from "./src/components/FetchLocation"
import SoundButton from "./src/components/SoundButton"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <SoundButton soundFile={"still_dre.mp3"}/>
      </View>
    );
  }



  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {console.log("Position:", position)}, error => console.log("ERROR", error))
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
