import React from 'react'
import {Button, CardSection, Card, Input} from './common'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: ''}
    }


    render(){
        return(
            <Card>
                <CardSection>
                     <Input 
                        label = "Email"
                        placeholder = "user@gmail.com"
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email: email})}
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