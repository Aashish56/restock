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

const SearchHandle = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (
  
  
    <View style={styles.container}>
      <View  style={{marginTop:25,marginHorizontal:12}}>
        
        <TouchableOpacity onPress={() => navigateToPage("back")}>
        <View style={styles.backButton}>
      <AntDesign name="arrowleft" size={14} color="black" />

       
        <Text style={{fontWeight:'600', fontSize:10,marginLeft:3}}>Back</Text>
      
          </View>
            </TouchableOpacity>
        <Text style={styles.pageTitle}>Search by ReStock handle</Text>
        <Text style={styles.pageDescription}>
        Search other business through their restock handle or phone number. 

        </Text>
           
        
              <View style={styles.inputcontainer}>
                  <AntDesign name="search1" size={20} color="black" style={{marginLeft:10}} />
                  <TextInput value="70180 64278" style={styles.inputbox} />
                  <AntDesign name="scan1" size={24} color="black" style={{marginRight:10}} />
              </View>  
              
              <View style={styles.contentcontainer}>
                  <View style={styles.circle}>
                      <Text style={styles.circleText}>DE</Text>
                  </View>
                  <View style={styles.heading}>
                      <Text style={styles.headingText}>Dana Electronics</Text>
                      <Text style={styles.headingText1}>Manufactorer - Electronics</Text>
                  </View>
             </View>
      
          </View>
          </View>
     
  
   
  );
};

export default SearchHandle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  backButton: {
    
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center', 
  },
  pageTitle: {
  
    textAlign: 'left',
    marginTop: 5,
    fontWeight: '700',
    fontSize: 22
  },
  pageDescription: {
   
    color: '#A6A6A6',
    marginTop: 7,
    textAlign: 'left',
    marginRight: 12,
    fontSize: 14,
      fontWeight: 'normal',
    marginBottom:25
  },

    inputcontainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 46,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'whitesmoke',
        borderRadius:8,
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    inputbox: {
        height: 46,
        width: '100%',
        color: '#003D34',
        fontSize: 14,
        fontWeight: '600',
       
        marginLeft:10,
    },
    contentcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:15
       
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        width:46,
        borderRadius: 23,
       backgroundColor:'#FEE7C9'
    },
    circleText: {
        fontSize: 16,
      fontWeight:'600'  
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft:18
    },
    headingText: {
        fontSize: 15,
        fontWeight:'bold'
    },
    headingText1: {
        color: '#A6A6A6',
        fontSize:12
    },
});
