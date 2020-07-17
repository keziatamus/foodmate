import React from 'react';
import { View, Text } from 'react-native';

export default function Button({ children }) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}