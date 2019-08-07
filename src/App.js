import React from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'
import {Header} from './components/common'


class App extends React.Component {
    render(){

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

        return (
            <View>
                <Header headerText = "Authentication" />
                <Text>
                    An App
                </Text>
            </View>
        )
    }
}

export default App