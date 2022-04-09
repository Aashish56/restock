import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserCheckbox from "../signup/UserCheckBox";

const Addconnection = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (


    <View style={styles.container}>
      <View >

        <TouchableOpacity onPress={() => navigateToPage("back")}>
          <View style={styles.backButton}>
            <AntDesign name="arrowleft" size={14} color="black" />


            <Text style={{ fontWeight: '600', fontSize: 10, marginLeft: 3 }}>Back</Text>

          </View>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Add a New Connection</Text>
        <Text style={styles.pageDescription}>
          Add a new business connection to you business. There are two ways you can add connection.

        </Text>


        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox}>

            <UserCheckbox />
          </View>
          <View style={styles.textbox}>
            <Text style={styles.checkboxLabel}>Scan Business QR Code</Text>
            <Text style={styles.checkboxdescription}>Ask your business connection to share their
              QR code with you for easy connection.</Text>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox}>

            <UserCheckbox />
          </View>
          <View style={styles.textbox}>
            <Text style={styles.checkboxLabel}>Scan Business QR Code</Text>
            <Text style={styles.checkboxdescription}>Ask your business connection to share their
              QR code with you for easy connection.</Text>
          </View>
        </View>

      </View>

    </View>

  );
};

export default Addconnection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  backButton: {
    marginLeft: "12px",
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageTitle: {
    marginLeft: 12,
    textAlign: 'left',
    marginTop: 5,
    fontWeight: '700',
    fontSize: 22
  },
  pageDescription: {
    marginLeft: 12,
    color: '#A6A6A6',
    marginTop: 7,
    textAlign: 'left',
    marginRight: 12,
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 25
  },

  checkboxContainer: {
    marginHorizontal: 12,
    marginTop: -5,
    display: 'flex',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'flex-start',
    marginBottom: 15

  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,

  },
  checkboxLabel: {
    marginHorizontal: 8,
    color: '#003D34',
    fontWeight: '600',
    fontSize: 16,

  },
  checkboxdescription: {
    color: '#A6A6A6',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',

    marginLeft: 10


  },
  textbox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: '-27px',
    marginLeft: 25
  },

});
