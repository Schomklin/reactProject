import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'


const AlertComponent = () => {

    const simpleAlertHanler = () => {
        alert('Hello I am Simple Alert from JavaScript')
    }

    const twoOptionAlertHanler = () => {
        //use Alert from React Native
        Alert.alert(
            'Alert Title', 
            'My Alert Msg', 
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
        );
    }

    return (
        <View style={styles.container}>
            <Button
                title='Simple Alert'
                onPress={simpleAlertHanler}
            />
            <Button
                title='Alert with Two Options'
                onPress={twoOptionAlertHanler}
            />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
    },
});
