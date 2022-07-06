import { View, Text } from 'react-native'
import React from 'react'

const CustomText = ({ fname, lname }) => {
    return (
        <View>
            <Text>
                Your First Name is {fname}!
                and Last Name is {lname}
            </Text>
        </View>
    )
};

const MyCustomTextWith = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <CustomText fname='Amonpan' lname='Chomklin' />
            <CustomText fname='Nichakarn' lname='Chaychak' />
        </View>
    )
}

export default MyCustomTextWith