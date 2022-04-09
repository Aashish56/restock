import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';
const baseUrl = "https://flbl-dev.herokuapp.com/";
const CreateAccount = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    bio: "",
    authorities: []
  });
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSignup = async () => {
    setIsLoading(true);
    if (!form.fullName.trim()) {
      alert("Name is invalid");
      return;
    }
    if (!form.email.trim()) {
      alert("Email is invalid");
      return;
    }
    if (!form.phoneNumber.trim()) {
      alert("Phone is invalid");
      return;
    }
    if (!form.password.trim()) {
      alert("Password is invalid");
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}user/signup`, form);
      if (response.status === 200) {
        navigateToPage("otp")
      } else {
        console.log(error)
        setIsLoading(false);
        // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NDgyMmE5ZC0xMDM4LTQ4MmItODc0ZS0zN2U1YzUwZjllZDIiLCJyb2xlcyI6WyJVU0VSIl0sImV4cCI6MTY0Nzc3MjY1MX0.s6rOH6d4 - 397EieGnhV4pL6_nfLj - uiHbQnBsSuOONCO2TTQRS3eowPErUAX0zlGUM - Madya8Ly5ArdpFZZ4Yw
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  }

  const navigateToPage = (pageName) => {
    if (pageName === "otp") {
      navigation.navigate("OTP");
    } else if (pageName === "back") {
      navigation.navigate("Onboarding");
    }
  };

  return (
    isLoading ?
      <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
      :
      <View style={styles.container}>
        <ScrollView>
        <View style={{paddingTop:10}}>
          <TouchableHighlight onPress={() => navigateToPage("back")}>
            <AntDesign name="arrowleft" size={24} color="white" style={{marginBottom:12}}/>
          </TouchableHighlight>

          <Text style={styles.pageTitle}>Create an account</Text>
          <Text style={styles.pageDescription}>
            Sign up for a new account on restock.
          </Text>
          </View>
          <View style={styles.formHolder}>
            <View style={styles.inputHolder}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onInputChange("fullName", e)}
                value={form.fullName}
                placeholder="Enter your full name..."
              />
            </View>

            <View style={styles.inputHolder}>
              <Text style={styles.inputLabel}>Personal Email Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onInputChange("email", e)}
                value={form.email}
                placeholder="Enter your email address..."
              />
            </View>

            <View style={styles.inputHolder}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onInputChange("phoneNumber", e)}
                value={form.phoneNumber}
                placeholder="Enter your phone number..."
              />
            </View>

            <View style={styles.inputHolder}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                type="password"
                onChangeText={(e) => onInputChange("password", e)}
                value={form.password}
                placeholder="Enter your password..."
              />
            </View>
          </View>
          </ScrollView>

        <View style={styles.actionsContainer}>
          <TouchableHighlight
            style={styles.continueButton}
            onPress={() => handleSignup()}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F8F8F8",
  },
  containerActivity: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  backButton: {
    color: "#000",
    fontSize: 13,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  pageTitle: {
    color: "#000",
    fontSize: 24,
    fontWeight: '700',
  },
  pageDescription: {
    paddingVertical: 4,
    color: "#A6A6A6",
    fontSize: 17,
    lineHeight: 28,
  },
  formHolder: {
    marginTop: 30,
  },
  inputHolder: {
    marginBottom: 20,
    
  },
  inputLabel: {
    fontSize: 14,
    color: "#909090",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 15,
    height: 46,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  actionsContainer: {
    // position: "fixed",
    bottom: 10,
    
  },
  continueButton: {
    backgroundColor: "#26C889",
    height: 54,
    alignItems: "center",
    borderRadius: 12,
  },
  continueButtonText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 16,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  }
});
