import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView
} from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={styles.separator} />
)

const ButtonExample = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required.
                    It is recommended to set accessigilityLabel
                    to thelp make your app usable by everyone.
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Simple Button pressed')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required.
                    It is recommended to set accessigilityLabel
                    to thelp make your app usable by everyone.
                    to thelp make your app usable by everyone.
                </Text>
                <Button
                    title='Press Me'
                    onPress={() => alert('Button with adjusted color pressed')}
                    color="#f194ff"
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required.
                </Text>
                <Button
                    title='Press Me'
                    disabled //Button can not press                    
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required.      The title and onPress handler are required.
                    It is recommended to set accessigilityLabel
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title='Left button'
                        onPress={() => alert('Left button pressed')}
                    />
                    <Button
                        title='Right button'
                        onPress={() => alert('Right button pressed')}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        marginTop:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});