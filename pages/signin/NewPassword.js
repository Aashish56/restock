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
import { AntDesign } from '@expo/vector-icons';


const NewPassword = ({ navigation }) => {

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
                  <Text style={styles.ResetText}>Enter new Password</Text>
                  <Text style={styles.ResetText1}>Fill what should be your new password to login to this account.</Text>
              </View>
              <View >
                  <View>
            <Text style={{
              color: '#909090',
              marginLeft: 12,
              fontSize: 11,
              marginBottom: 5,
              marginTop: 20
            }}>Password</Text>
                  </View>
          <View style={{
                    backgroundColor: 'whitesmok',
                    marginHorizontal: 12,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 2,
            borderColor: '#EEEEEE',
                    backgroundColor:'white',
                    borderRadius:8,
                    height:46,
                  }}>

                      <TextInput placeholder="**********" style={{ marginLeft: 5}}>    
                      </TextInput>
                  </View>
            </View>    
      
          </View>
      <TouchableOpacity>
        <View style={{
          display: 'flex',
          justifyContent: 'flex-end',
         height:'5%',
        flexDirection:'column'}}>
          <View style={styles.button}>
            <Text style={styles.textbutton}>Continue</Text>
          </View>
          </View>
</TouchableOpacity>
    </View>
   
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    height: "100%",
    display: 'flex',
   
  },
  backButton: {
    marginHorizontal: "12px",
    marginTop: 10,
      display: 'flex',
    
    flexDirection: 'row',
    alignItems: 'center',
   
    
    
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
        fontWeight: 'normal',
        color: '#A6A6A6',
      marginTop: 3,
      marginRight: 12,
      fontWeight:'400'
      
        
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
        fontSize: 14,
        fontWeight: '700',
        color:'white'
      }


 
});
