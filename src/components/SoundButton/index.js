import React from 'react'
import { Button } from "react-native"


var SoundButton = props => {

    let reactSound = props.reactSound


    function playSound() {

        let sound = new reactSound(props.soundFile, reactSound.MAIN_BUNDLE, error => callback(error, sound))

        const callback = (error, sound) => {
            if (error) {
                Alert.alert('error', error.message)
                return;
            }

            sound.play((success) => {
                if (success) {
                    sound.release()
                } else {
                    console.log('playback failed due to audio decoding errors')
                    sound.reset()
                }
            })
        }
    }

    return (
        <Button title={props.name} onPress={() => playSound()} />
    )
}

export default SoundButton