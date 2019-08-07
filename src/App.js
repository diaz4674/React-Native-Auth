import React from 'react'
import {View} from 'react-native'
import firebase from 'firebase'
import {Header} from './components/common'
import LoginForm from './components/LoginForm'

class App extends React.Component {

    componentDidMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyCsV2uQCAFd-hBMYdm1QDR0QzVGUydr1g4",
                authDomain: "reactnativeauth-c1f7b.firebaseapp.com",
                databaseURL: "https://reactnativeauth-c1f7b.firebaseio.com",
                projectId: "reactnativeauth-c1f7b",
                storageBucket: "",
                messagingSenderId: "172747869324",
                appId: "1:172747869324:web:2f7b7e2574ce9fcc"
              })
    }   
    
    render(){
        return (
            <View>
                <Header headerText = "Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App