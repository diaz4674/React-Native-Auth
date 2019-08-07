import React from 'react'
import {View} from 'react-native'
import {Button, CardSection, Card} from './common'

class LoginForm extends React.Component {
    render(){
        return(
            <Card>
                <CardSection>

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