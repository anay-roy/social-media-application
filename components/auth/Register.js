import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

import { colors } from './colors';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleSignup = () => {
    const { navigation } = this.props;
    const { name, email, password } = this.state;

    // Example validation: check if name, email, and password are not empty
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      // Navigate to the main page (Home) or perform signup logic
      navigation.navigate("Home"); // Replace with actual signup logic
    } else {
      alert('Please fill in all fields.');
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
            <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.navigate("Landing")}>
              <FontAwesome name={'angle-double-left'} color={colors.primary} size={40} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.welcomeText}>Create Account</Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Entypo name="user" size={30} color={colors.grey} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={colors.grey}
                selectionColor={colors.black}
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
              />
            </View>
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
            <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Signup;

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
  signupButton: {
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
