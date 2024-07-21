import React, { Component } from 'react'
import {View, Button, TextInput} from 'react-native'

export class Login extends Component {
  render() {
    return (
      <View>
        <TextInput
            placeholder='email'
            onChangeText={(email) => this.setState({email})}
        />
        <TextInput
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
        />
        <Button
            onPress={()=> this.onLogin()}
            title='Login in'
        />
      </View>
    )
  }
}

export default Login
