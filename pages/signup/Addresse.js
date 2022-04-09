import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Addresse = ({ navigation }) => {
  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 12 }}>

        <View style={styles.menuButton}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={18} color="#003D34" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          PERSONAL PROFILE INFO </Text>
        <View style={styles.description}>
          <Text>
            #34, Aryan Enclave, Sector 9, Chandigarh, Aryan Enclave, Sector 9, Chandigarh, Punjab
          </Text>
          <Feather name="edit" size={15} color="#004B46" />
          <AntDesign name="delete" size={15} color="red" />
        </View>
        <TouchableOpacity>
          <View style={styles.View}>
            <View style={styles.View1}>
              <AntDesign name="plus" size={15} color="#26C889" />
            </View>
            <Text style={styles.button}>UPDATE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Addresse;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F8F8F8",
    // paddingBottom: 15
  },
  menuButton: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize:14, fontWeight: '600', marginTop: 8 },
  
description:{
  backgroundColor: 'white',
  borderRadius:8,
  marginTop: 20,
  display: 'flex',
  flexDirection: 'row',
  paddingHorizontal: 8,
  paddingVertical: 15
  },
View:{
  height: 46,
  backgroundColor: '#26C889',
  borderRadius:8,
  marginTop: 40,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
  },
View1:{
  width: 15,
  height: 15,
  backgroundColor: 'white',
  borderRadius: 3,
  marginRight: 3,
  justifyContent: 'center',
  alignItems: 'center',
  },
button:{
  color: 'white',
  fontSize:16,
  fontWeight: '600',
  marginLeft: 3
},
});
