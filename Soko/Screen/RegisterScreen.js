import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
        <Text style={styles.tagline}>Everything Beauty.</Text>
      </View>
      <Text style={styles.signupHeader}>SIGN UP</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.signupButton}>
        <Button title="SIGN UP" onPress={() => {}} color="#e74c3c" />
      </View>
      <Text style={styles.orText}>OR SIGN UP WITH</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.loginText}>Already a user? LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a52a2a', // Dark red background color as seen in the screenshot
    },
    header: {
      alignItems: 'center',
      marginTop: 50,
    },
    logoText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF', // Assuming the logo text is white
      marginBottom: 4, // Space below the logo
    },
    tagline: {
      fontSize: 12,
      color: '#FFFFFF', // Assuming the tagline text is white
      marginBottom: 30, // Space below the tagline
    },
    form: {
      marginHorizontal: 30,
    },
    signUpText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000', // Assuming the sign-up text is black
      alignSelf: 'center',
      marginBottom: 20,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#000000', // Border color for input fields
      padding: 10,
      marginBottom: 20,
      color: '#000000', // Text color for input fields
    },
    button: {
      backgroundColor: '#FF0000', // Red button background color
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      color: '#FFFFFF', // Button text color
      fontWeight: 'bold',
    },
    orText: {
      alignSelf: 'center',
      color: '#000000', // Assuming 'OR SIGN UP WITH' text is black
      marginVertical: 10,
    },
    socialMediaButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    socialButton: {
      padding: 10,
      // Additional styles for social media buttons can be added here
    },
    loginText: {
      alignSelf: 'center',
      color: '#000000', // Assuming the login text is black
      marginTop: 20,
    },
  });
  