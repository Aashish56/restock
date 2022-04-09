import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from "react-native";

const Forgot = ({ navigation }) => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const onInputChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigateToPage = (pageName) => {
    if (pageName === "otp") {
      navigation.navigate("OTP");
    } else if (pageName === "back") {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight onPress={() => navigateToPage("back")}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableHighlight>

        <Text style={styles.pageTitle}>Reset Password</Text>
        <Text style={styles.pageDescription}>
          It’s quite easier to get back into your account.
        </Text>

        <View style={styles.formHolder}>
          <View style={styles.inputHolder}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => onInputChange("phone", e)}
              value={form.phone}
              placeholder="Enter your phone number..."
            />
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.continueButton}
          onPress={() => navigateToPage("otp")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Forgot;

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
    // fontWeight: 700,
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
