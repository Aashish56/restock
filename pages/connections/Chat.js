import React from "react";
import {
  StyleSheet,
  Text,
  View,
    TextInput,
    CheckBox
} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserCheckbox from "../signup/UserCheckBox";
import { ScrollView } from "react-native-web";
const Chat = ({ navigation }) => {
 
  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (
  <>
  
    <View style={styles.container}>
       
              <View style={styles.headerContainer}>
                  <View><AntDesign name="arrowleft" size={18} color="black" /></View>
                  <View style={styles.header}>
                      <View style={{display:'flex',flexDirection:'row'}}>
                          <View style={styles.circle}>
                          <Text style={{color:'white',fontSize:16,fontWeight:'700'}}>DE</Text>
                          </View> 
                          <View style={{paddingLeft:25,paddingTop:4}}>
                              <Text style={{fontSize:15,fontWeight:'700'}}>Dana Electronics</Text>
                              <Text style={{color:'#A6A6A6',fontSize:12}}>Manufactorer - Electronics</Text>
                          </View>
                      </View>
                      <View>
                      <Fontisto name="more-v-a" size={18} color="black" />
                      </View>
                  </View>
                 </View>
              <ScrollView style={{ height: '75%', marginTop: '60px' }}  showsHorizontalScrollIndicator={false}>
                  <View>
                  <View style={styles.message}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                  </View>
                  <View style={styles.message}>
                     <Text  style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                  </View>
                  <View style={styles.message}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                  </View>
                  <View style={styles.message}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                      </View>
                  </View>
                  <View style={{marginTop:15}}>
                  <View style={styles.myMessage}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                      </View> 
                      <View style={styles.myMessage}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                      </View> 
                      <View style={styles.myMessage}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                      </View> 
                      <View style={styles.myMessage}>
                     <Text style={styles.messageText}>Hey there, asdsad,sad asd</Text>
                      </View> 
                  </View>
                 </ScrollView>
              <View style={styles.inputContanier}>
                  <TextInput placeholder="Send a message..." style={styles.input} />
                  <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold'}}>Send</Text>
                 </View>

        </View>
        
       
       
    

 
      </>
  );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F8F8F8",
        display: 'flex',
        flexDirection: 'column',
   
        
    },
    headerContainer: {
        
        paddingTop: 25,
        paddingHorizontal: 12,
        paddingBottom: 10,
        height:'10%'
        
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:15
    },
    circle: {
        backgroundColor: '#004B46',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 46,
        width: 46,
        borderRadius:50
    },
 
    message: {
        backgroundColor: '#EFF3F9',
        marginLeft: 12,
        marginTop: 15,
        marginRight: '100px',
        padding: 15,
        borderRadius:8
        
    },
    messageText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'left'
    },

    myMessage: {
        backgroundColor: '#EFF3F9',
        marginLeft: '100px',
        marginRight: 12,
        padding: 15,
        borderRadius:8,
        marginBottom:15
        
    },
    inputContanier: {
        backgroundColor: 'white',
        height: '9%',
        marginBottom: '6%',
        borderRadius:8,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        marginHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent:'space-between',
      
    },
    input: {
        height: 'auto',
        width: '100%',
        
        
    },
});
