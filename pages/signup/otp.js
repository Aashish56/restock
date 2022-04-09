import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
const OTP = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    if (pageName === "next") {
      navigation.navigate("AccountType");
    } else if (pageName === "back") {
      navigation.navigate("CreateAccount");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop:25}}>
        <TouchableHighlight onPress={() => navigateToPage("back")}>
        <AntDesign name="arrowleft" size={24} color="#003D34" />
        </TouchableHighlight>
      </View>
      <ScrollView>
        <Text style={styles.pageTitle}>Enter OTP</Text>
        <Text style={styles.pageDescription}>
          We've send an OTP message. Please check your phone for OTP on
          9996660001
        </Text>
        </ScrollView>

      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.continueButton}
          onPress={() => navigateToPage("next")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F8F8F8",
  },
  pageTitle: {
    marginTop: 16,
    color: "#000",
    fontSize: 24,
    fontWeight: '700',
  },
  pageDescription: {
    paddingVertical: 8,
    color: "#A6A6A6",
    fontSize: 17,
    lineHeight: 28,
  },
  actionsContainer: {
    // position: "fixed",
    bottom: 10,
   
    // width: "94%",
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
