import React from 'react'
import {TextInput} from 'react-native'
import {Button, CardSection, Card} from './common'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
    }


    render(){
        return(
            <Card>
                <CardSection>
                     <TextInput 
                        value = {this.state.text}
                        onChangeText = {text => this.setState({text})}
                        style = {{height: 40, width: 100}} 
                     />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>    
                </CardSection>
            </Card>
        )
    }
}



export default LoginForm;