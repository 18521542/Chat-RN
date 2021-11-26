import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = (props) => {
    
    const {user} = props.route.params;
    return (
        <View>
            <Text>{`Hello ${user}`}</Text>
            <View>
                <GiftedChat/>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
