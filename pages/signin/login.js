import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ScrollView
} from "react-native";
import axios from "axios";
import { AntDesign } from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext';

const baseUrl = "https://flbl-dev.herokuapp.com/";
const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigateToPage = (pageName) => {
    if (pageName === "reset") {
      navigation.navigate("ResetPassword");
    } else if (pageName === "forgot") {
      navigation.navigate("Forgot");
    } else if (pageName === "back") {
      navigation.navigate("Onboarding");
    } else if (pageName === "signin") {
      navigation.navigate("SelectABusiness");
    }
  };

  const handleSignin = async () => {
    // navigateToPage('signin')
    if (!form.phoneNumber.trim()) {
      alert("Phone is invalid");
      return;
    }
    if (!form.password.trim()) {
      alert("Password is invalid");
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}user/signin`, form);
      if (response.status === 200) {
        navigateToPage("signin")
      } else {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
    setIsLoading(true);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{paddingTop:10}}>
        <TouchableHighlight onPress={() => navigateToPage("back")}>
        <AntDesign name="arrowleft" size={24} color="white" style={{marginBottom:12}}/>
        </TouchableHighlight>
        </View>
        <Text style={styles.pageTitle}>Sign In</Text>
        <Text style={styles.pageDescription}>Get into your account.</Text>

        <View style={styles.formHolder}>
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

          <TouchableHighlight onPress={() => navigateToPage("forgot")}>
            <Text style={styles.forgotButton}>Forgot Password?</Text>
          </TouchableHighlight>
        </View>
    
        </ScrollView>
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.continueButton}
          onPress={() => handleSignin()}
        >
          <Text style={styles.continueButtonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
    height: 44,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  forgotButton: {
    textAlign: "right",
    color: "#26C889",
    fontSize: 15,
    fontWeight: '600',
  },
  actionsContainer: {
    position: "relative",
    bottom: 10,
    left: 10,
    width: "94%",
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
});
