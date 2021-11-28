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
                firebase.auth().signInAnonymously();
            }
        })
    }
}

export default new Fire();