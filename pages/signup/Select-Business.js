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
import UserCheckbox from "./UserCheckBox";

const SelectBusiness = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "next") {
      navigation.navigate("Alright");
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

       
        <Text style={{fontWeight:'600', fontSize:10,marginLeft:3}}>Back</Text>
      
          </View>
            </TouchableOpacity>
        <Text style={styles.pageTitle}>Select your primary business category</Text>
        <Text style={styles.pageDescription}>
        In which category this business will most likely to do business. You acn select max. 3 categories.

        </Text>
           
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="black" style={{marginLeft:5}}/>
          <TextInput style={styles.input}
          placeholder="Search by category name...">
          
          </TextInput>
          
        </View>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Elecronics</Text>
          </View>
          <View  style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Textilles</Text>
          </View>
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience Store</Text>
          </View>
          <View  style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Twxtilles</Text>
          </View>
          <View  style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Food & beverage</Text>
          </View>
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience Sotre</Text>
          </View>
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Food & beverage</Text>
          </View>
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience</Text>
          </View> 
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience</Text>
          </View> 
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience</Text>
          </View> 
          <View style={styles.checkbox}>
        <UserCheckbox />
            <Text style={styles.checkboxLabel}>Convience</Text>
            </View> 
      </View>
      <View style={{
          display: 'flex',
        marginTop:10,
          justifyContent: 'flex-end',
         
        flexDirection:'column'}}>
          <TouchableOpacity onPress={() => navigateToPage("next")}>
          <View style={styles.button}>
            <Text style={styles.textbutton}>COMPLETE BUSINESS PROFILE</Text>
            </View>
            </TouchableOpacity>
      </View>
          </View>
     
    </View>
   
  );
};

export default SelectBusiness;

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
  pageTitle: {
    marginLeft: 12,
    textAlign: 'left',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 22
  },
  pageDescription: {
    marginLeft: 12,
    color: '#A6A6A6',
    marginTop: 7,
    textAlign: 'left',
    marginRight: 12,
    fontSize: 14,
    fontWeight:'normal'  
  },
  inputContainer: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius:8,
    height:46  
  },
  input: {
    width: '100%',
   
    marginHorizontal: 10,
    color:'#BABABA'
  },
  checkboxContainer: {
    marginHorizontal: 12,
    marginVertical: 15,
    marginTop: -5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 6,
    backgroundColor:'white'
  },
  checkbox: {
    display: 'flex',
    flexDirection:'row',
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems:'center'
  },
  checkboxLabel: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight:'500'
  },
  button: {
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#26C889',
    borderRadius:8,
    display: 'flex',
    alignItems: 'center',
    height: 46,
    justifyContent:'center'
  },
  textbutton: {
    fontSize: 14,
    fontWeight: '700',
    color:'white'
  }
});
