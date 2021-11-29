import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Fire {
    constructor(){
        this.init();
        this.checkAuth();
    }

    init = () => {
        if(!firebase.apps.lenth){
            firebase.initializeApp({
                apiKey: "AIzaSyCV1EwqCIBz7pP-ShpGXdRsllMfwGQ9Duc",
                authDomain: "chatapprn-4e14c.firebaseapp.com",
                projectId: "chatapprn-4e14c",
                storageBucket: "chatapprn-4e14c.appspot.com",
                messagingSenderId: "604673017941",
                appId: "1:604673017941:web:993f63042cb4e33f45acdc"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(element => {
            const message = {
                text: element.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: element.user
            }

            this.db.push(message)
        });
    }

    parse = message => {
        const { user, text, timestamp } = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp)
        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off(){
        this.db.off();
    }

    get db(){
        return firebase.database().ref("messages")
    }

    get uid(){
        return (firebase.auth().currentUser|| {}).uid;
    }
}

export default new Fire();