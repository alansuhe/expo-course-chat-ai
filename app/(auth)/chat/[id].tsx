import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Chat = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Chat {id}</Text>
        </View>
    )
}

export default Chat