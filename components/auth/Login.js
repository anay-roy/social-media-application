import React, { Component } from 'react';
import { Text, ImageBackground, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

import { colors } from './colors';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    const { navigation } = this.props;
    const { email, password } = this.state;

    // Check if email and password are not empty
    if (email.trim() !== '' && password.trim() !== '') {
      // Navigate to the main page (Home)
      navigation.navigate("Home");
    } else {
      // Optionally show an alert or message if fields are empty
      alert('Please enter both email and password.');
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/darkmode.jpeg')}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={()=> navigation.navigate("Landing")}>
              <FontAwesome name={'angle-double-left'} color={colors.primary} size={40} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.welcomeText}>Back</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Entypo name="email" size={30} color={colors.grey} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.grey}
                selectionColor={colors.black}
                keyboardType="email-address"
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Entypo name="lock" size={30} color={colors.grey} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.grey}
                selectionColor={colors.black}
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={()=> navigation.navigate("SIGNUP")}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'flex-start',
    marginTop: 60,
    paddingHorizontal: 20,
    width: '100%',
  },
  backButtonWrapper: {
    height: 60,
    width: 60,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 170
  },
  headerTextContainer: {
    marginBottom: 20,
    bottom: 180,
    left: 180,
  },
  welcomeText: {
    fontSize: 40,
    color: colors.white,
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    top:50,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: colors.white,
    marginLeft: 10,
  },
  loginButton: {
    top:35,
    backgroundColor: 'teal',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  loginButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  signupButton: {
    top: 35,
    backgroundColor: colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  signupButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
});
