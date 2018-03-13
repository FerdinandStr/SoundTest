import React from 'react'
import { Button } from "react-native"

import Sound from 'react-native-sound'

Sound.setCategory('Playback');


var SoundButton = props => {

    var sound = new Sound(props.soundFile, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
    })

    var playSound = () => {

        console.log(sound.isPlaying())

        sound.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
                sound.reset();
            }
        });
    }

    return (
        <Button title="SoundButton" onPress={() => playSound()} />
    )
}

export default SoundButton