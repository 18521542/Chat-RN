import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';

export default class ChatScreen extends React.Component {
    state = {
        messages :[]
    }

    get user(){
        return {
            _id: Fire.uid,
            name: this.props.route.params.user
        }
    }

    componentDidMount() {
        Fire.get(message => {
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        })
    }
    
    componentWillUnmount(){
        Fire.off();
    }

    render(){
        // console.log(this.props.route.params)
        const chat = <GiftedChat
            messages={this.state.messages}
            onSend={Fire.send}
            user={this.user}        
        />
        return (
            <SafeAreaView style={{flex:1}}>
                {chat}
            </SafeAreaView>
        )
    }
}


