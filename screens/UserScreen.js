import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

import Fire from '../Fire'
const UserScreen = (props) => {
    const [userName, setUsername] = useState("")
    return (
        <View>
            <Text style={styles.Text}>Enter a User</Text>
            <TextInput 
                style={styles.TextInput}
                onChangeText={setUsername}
            />
            <View style={styles.btn}>
                <Button
                    title="Go chat"
                    onPress={()=>{
                        props.navigation.navigate("Chat", {
                            user: userName,
                        })
                    }}
                />
            </View>
        </View>

    )
}

export default UserScreen

const styles = StyleSheet.create({
    Text:{
        fontSize:30,
        margin:10
    },
    TextInput:{
        backgroundColor:"white",
        width:"80%",
        height:30,
        fontSize:20,
        margin:10,
        borderRadius:10,
        alignSelf:"center"
    },
    btn:{
        width:"80%",
        alignSelf:"center"
    }
})
