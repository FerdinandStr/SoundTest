import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
let Sound = require('react-native-sound')

Sound.setCategory('Playback');

import FetchLocation from "./src/components/FetchLocation"
import SoundButton from "./src/components/SoundButton"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RBTV Taunts !</Text>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          {this.createSoundButtons()}
        </ScrollView>
      </View>
    );
  }



  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => { console.log("Position:", position) }, error => console.log("ERROR", error))
  }

  createSoundButtons = () => {

    let buttonArray = []

    for (let i = 60; i <= 141; i++) {
      buttonArray.push(<SoundButton reactSound={Sound} name={" " + i + " "} soundFile={"roe_" + i + ".mp3"} />)
    }

    return (
      buttonArray
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 20
  }
});
