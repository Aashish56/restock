import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const EditProfile = ({ navigation }) => {

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
        <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 8 }}>
          PERSONAL PROFILE INFO </Text>
        <View style={styles.col}>
          <View style={{ display: 'flex', flexDirection: 'row', }}>

            <View style={styles.row}>
              <FontAwesome name="user-circle-o" size={38} color="black" />
            </View>
            <View style={styles.EditProfile}>
              <AntDesign name="upload" size={10} color="white" />
            </View>
            <Text style={styles.heading}>Your business store</Text>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.name}>Name</Text>
            <View style={styles.container2}>
              <TextInput value="kenzi lawson" style={styles.input} />
            </View>



            <View style={{ marginTop: 25 }}>
              <Text style={styles.name}>Email</Text>
              <View style={styles.inputcontainer}>
                <TextInput value="kenzilawson@gmail.com" style={styles.input} />
              </View>
            </View>
            <View style={{ marginTop: 25 }}>
              <Text style={styles.name}>Phone Number</Text>
              <View style={styles.numbercon}>
                <TextInput value="9012119232" style={styles.input} />
              </View>
            </View>





            <View style={{ marginTop: 25 }}>
              <Text style={styles.name}>Store Name</Text>
              <View style={styles.inputcontainer}>
                <TextInput value="select" style={styles.input} />
              </View>
            </View>




          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.buttoncontainer}>
            <View style={styles.button}>
              <AntDesign name="plus" size={15} color="#26C889" />
            </View>
            <Text style={styles.buttonText}>UPDATE</Text>
          </View>
        </TouchableOpacity>
      </View>



    </View>

  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    backgroundColor: "#F8F8F8",
    paddingBottom: 15
  },
  menuButton: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15
  },
  row: {
    width: 41,
    height: 41,
    borderRadius: 21,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


  },
  EditProfile: {
    width: 15,
    height: 15,
    backgroundColor: '#26C889',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: '-15px'
  },
  heading: {
    color: '#393939',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 5
  },
  name: {
    color: '#909090',
    fontSize: 11
  },
  inputcontainer: {
    marginTop: 6,
    borderBottomColor: '#DED9D3',
    borderBottomWidth: 1
  },
  container2: {
    marginTop: 6,
    borderBottomColor: '#DED9D3',
    borderBottomWidth: 1
  },
  input: {
   
    fontSize: 17,
    fontWeight: '400',
  },
  numbercon: {
    marginTop: 6,
    borderBottomColor: '#DED9D3',
    borderBottomWidth: 1
  },
  buttoncontainer: {
    height: 46,
    backgroundColor: '#26C889',
    borderRadius: 8,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'


  },
  button: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 3

  }

});
