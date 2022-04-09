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
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const OtpResetPassword = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (
  
  
    <View style={styles.container}>
      <View style={{height:'95%'}}>
        
        <TouchableOpacity onPress={() => navigateToPage("back")}>
        <View style={styles.backButton}>
            <AntDesign name="arrowleft" size={14} color="black" />
        <Text style={{fontWeight:'600d',fontSize:10,textAlign:'center'}}>Back</Text>
      </View>
    </TouchableOpacity>
              <View style={styles.Rest}>
                  <Text style={styles.ResetText}>Reset Password</Text>
                  <Text style={styles.ResetText1}>We’ve send an OTP message. Please check your phone for OTP on <span style={{color:'#26C889'}}>9996660001</span> </Text>
              </View>
              <View >
                  <View>
            <Text style={{
              color: '#666666',
              marginLeft: 12,
              marginBottom: 5,
              marginTop: 20,
              fontSize: 14,
              fontWeight: 'bold'
            }}>Not your account?<span style={{ color: '#26C889', fontSize: 14, fontWeight: 'bold', marginRight: 12 }}>Change Number</span> </Text>
                  </View>
                  <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 50,
                      alignItems: 'center',
                      justifyContent:'center'
                  
                  }}>
                      <View style={styles.conatiner}>
                      
                      <TextInput
                              keyboardType="numeric"
                              maxLength={1}
                              textAlign={'center'}
                              style={{
                          marginLeft: 40,
                          width:46, font:20, fontWeight:'bold'
                        }}>      
                      </TextInput>
                  </View>
                  <View style={styles.conatiner}>
                      
                  <TextInput
                              keyboardType="numeric"
                              maxLength={1}
                              textAlign={'center'}
                              style={{
                          marginLeft: 40,
                          width:46, font:20, fontWeight:'bold'
                        }}>      
                      </TextInput>
                  </View>
                  <View style={styles.conatiner}>
                      
                  <TextInput
                              keyboardType="numeric"
                              maxLength={1}
                              textAlign={'center'}
                              style={{
                          marginLeft: 40,
                          width:46, font:20, fontWeight:'bold'
                        }}>   
                      </TextInput>
                  </View>
                  <View style={styles.conatiner}>
                      
                  <TextInput
                              keyboardType="numeric"
                              maxLength={1}
                              textAlign={'center'}
                              style={{
                          marginLeft: 40, borderRadius:8,
                          width:46, font:20, fontWeight:'bold'
                        }}>    
                      </TextInput>
                      </View>
                      </View>
            </View>    
      
      </View>
      <View style={{
          display: 'flex',
          justifyContent: 'flex-end',
         height:'5%',
        flexDirection:'column'}}>
          <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.textbutton}>Continue</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
   
  );
};

export default OtpResetPassword;

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
    alignItems:'center',
    
    
    },
    Rest: {
        marginTop: 5,
        marginLeft:12
    },
    ResetText: {
        fontSize: 22,
        fontWeight:'700',
    },
    ResetText1:{
        fontSize: 14,
        fontWeight: '400',
        color: '#A6A6A6',
        marginTop:3
        
    },
    conatiner: {
        backgroundColor: 'white',
        marginHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
      alignItems: 'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor: '#DED9D3',
        borderRadius: 3,
        width: 46,
        height:46
        
    },
    button: {
        marginHorizontal: 12,
        marginVertical: 8,
        backgroundColor: '#26C889',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        height: 46,
        justifyContent: 'center',
       
        
      },
      textbutton: {
        fontSize: 11,
        fontWeight: 'bold',
        color:'white'
      }


 
});
