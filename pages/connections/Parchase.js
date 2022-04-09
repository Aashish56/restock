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
const Parchase = ({ navigation }) => {
 
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
                  <View style={styles.headeritem1}>
                      <View style={{display:'flex',flexDirection:'row'}}>
                      <View style={styles.headerCircle}>
                          <Text style={{color:'white',fontSize:16,fontWeight:'700',}}>DE</Text>
                      </View>
                      <View style={{paddingLeft:12}}>
                          <Text style={{fontSize:19,fontWeight:'600', color:'white'}}>Dana’s Bedsheets</Text>
                          <Text style={{color:'rgba(255, 255, 255, 0.6)',fontSize:12}}>Manufactorer - Electronics</Text>
                          </View>
                      </View>
                      
                  </View>

                  <View style={styles.headeritem2}>
                      <View style={styles.menuButton}>
                          <FontAwesome5 name="phone-alt" size={20} color="white"  />
                          <Text style={{color:'white',fontSize:14,fontWeight:'600',paddingTop:10}}>Call</Text>
                      </View>
                      <View style={styles.menuButton1}>
                          <AntDesign name="message1" size={24} color="white" />
                          <Text style={styles.menuButtonText}>Message</Text>
                      </View>
                     
                     

                      
                  </View>
                  <Text style={{color:'white',fontSize:12,fontWeight:'normal',paddingTop:25}}>This is a business account.</Text>
               </View>

              <ScrollView style={{paddingBottom:'100px'}}>
   
              <View style={styles.heading}>
              <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{color:'#999999',fontSize:16,fontWeight:'600'}}>
                  Purchase 
                  </Text>
                  </View>
                  </View>



                  <View style={styles.cardContainer}>
                  <View style={styles.item}>
                      <Text style={{color:'#004B46',fontSize:17,fontWeight:'700'}}>15</Text>
                      <Text style={{color:'#004B46',fontSize:10,fontWeight:'700'}}>Dec</Text>
                      <Text style={{color:'#BABABA',fontSize:7,fontWeight:'500',marginTop:5}}>2022</Text>
                  </View>
                  <View style={styles.item}>
                      <Text style={{color:'#717171',fontSize:12,fontWeight:'600'}}>#122232322</Text>
                      <Text style={{fontSize:13,fontWeight:'600'}}>Sumit sir.</Text>
                      <Text style={{color:'#bababa',fontSize:10,fontWeight:'500'}}>70180xxxxxx</Text>
                  </View>
                  <View style={styles.item1}>
                      <Text style={{color:'#bababa',fontSize:12,fontWeight:'600',textAlign:'left'}}>15 items</Text>
                      <View style={{display:'flex',flexDirection:'row'}}>
                          <Text style={{ color: '#bababa', fontSize: 10, fontWeight: '600',textAlign:'left',marginLeft:12 }}>for</Text>
                          <Text style={{color:'#004B46',fontSize:12,fontWeight:'bold',textAlign:'left',marginLeft:4}}>₹</Text>
                          <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold',textAlign:'center',textAlign:'left',marginTop:'-2px'}}>1550</Text>
                      </View>
                      <View style={styles.itme3}>
                          <Text style={{fontSize:8,fontWeight:'600',color:'white',textAlign:'center',}}>UNPAID</Text>
                      </View>
                  </View>
                  <View  style={styles.item}>
                      <View style={styles.item4}>
                          <Text style={{color:'white',fontSize:9, fontWeight:'600',textAlign:'center'}}>PROCESSING</Text>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',}}>
                          <Text style={{color:'#004B46',fontSize:10,fontWeight:'600',marginTop:8,marginLeft:'-25px'}}>View Details</Text>
                          <AntDesign name="arrowright" size={10} color="#004B46" style={{paddingLeft:5,marginTop:10,marginLeft:'-2px'}} />
                      </View>
                   </View>
                  </View>
                  


                  <View style={styles.cardContainer}>
                  <View style={styles.item}>
                      <Text style={{color:'#004B46',fontSize:17,fontWeight:'700'}}>15</Text>
                      <Text style={{color:'#004B46',fontSize:10,fontWeight:'700'}}>Dec</Text>
                      <Text style={{color:'#BABABA',fontSize:7,fontWeight:'500',marginTop:5}}>2022</Text>
                  </View>
                  <View style={styles.item}>
                      <Text style={{color:'#717171',fontSize:12,fontWeight:'600'}}>#122232322</Text>
                      <Text style={{fontSize:13,fontWeight:'600'}}>Sumit sir.</Text>
                      <Text style={{color:'#bababa',fontSize:10,fontWeight:'500'}}>70180xxxxxx</Text>
                  </View>
                  <View style={styles.item1}>
                      <Text style={{color:'#bababa',fontSize:12,fontWeight:'600',textAlign:'left'}}>15 items</Text>
                      <View style={{display:'flex',flexDirection:'row'}}>
                          <Text style={{ color: '#bababa', fontSize: 10, fontWeight: '600',textAlign:'left',marginLeft:12 }}>for</Text>
                          <Text style={{color:'#004B46',fontSize:12,fontWeight:'bold',textAlign:'left',marginLeft:4}}>₹</Text>
                          <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold',textAlign:'center',textAlign:'left',marginTop:'-2px'}}>1550</Text>
                      </View>
                      <View style={styles.itme3}>
                          <Text style={{fontSize:8,fontWeight:'600',color:'white',textAlign:'center',}}>UNPAID</Text>
                      </View>
                  </View>
                  <View  style={styles.item}>
                      <View style={styles.item4}>
                          <Text style={{color:'white',fontSize:9, fontWeight:'600',textAlign:'center'}}>PROCESSING</Text>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',}}>
                          <Text style={{color:'#004B46',fontSize:10,fontWeight:'600',marginTop:8,marginLeft:'-25px'}}>View Details</Text>
                          <AntDesign name="arrowright" size={10} color="#004B46" style={{paddingLeft:5,marginTop:10,marginLeft:'-2px'}} />
                      </View>
                   </View>
                  </View>
                  

                  <View style={styles.heading}>
              <View style={{display:'flex',flexDirection:'row'}}>
                  <Text style={{color:'#999999',fontSize:16,fontWeight:'600'}}>
                 Sales
                  </Text>
                  </View>
                  </View>



                  <View style={styles.cardContainer}>
                  <View style={styles.item}>
                      <Text style={{color:'#004B46',fontSize:17,fontWeight:'700'}}>15</Text>
                      <Text style={{color:'#004B46',fontSize:10,fontWeight:'700'}}>Dec</Text>
                      <Text style={{color:'#BABABA',fontSize:7,fontWeight:'500',marginTop:5}}>2022</Text>
                  </View>
                  <View style={styles.item}>
                      <Text style={{color:'#717171',fontSize:12,fontWeight:'600'}}>#122232322</Text>
                      <Text style={{fontSize:13,fontWeight:'600'}}>Sumit sir.</Text>
                      <Text style={{color:'#bababa',fontSize:10,fontWeight:'500'}}>70180xxxxxx</Text>
                  </View>
                  <View style={styles.item1}>
                      <Text style={{color:'#bababa',fontSize:12,fontWeight:'600',textAlign:'left'}}>15 items</Text>
                      <View style={{display:'flex',flexDirection:'row'}}>
                          <Text style={{ color: '#bababa', fontSize: 10, fontWeight: '600',textAlign:'left',marginLeft:12 }}>for</Text>
                          <Text style={{color:'#004B46',fontSize:12,fontWeight:'bold',textAlign:'left',marginLeft:4}}>₹</Text>
                          <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold',textAlign:'center',textAlign:'left',marginTop:'-2px'}}>1550</Text>
                      </View>
                      <View style={styles.itme3}>
                          <Text style={{fontSize:8,fontWeight:'600',color:'white',textAlign:'center',}}>UNPAID</Text>
                      </View>
                  </View>
                  <View  style={styles.item}>
                      <View style={styles.item4}>
                          <Text style={{color:'white',fontSize:9, fontWeight:'600',textAlign:'center'}}>PROCESSING</Text>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',}}>
                          <Text style={{color:'#004B46',fontSize:10,fontWeight:'600',marginTop:8,marginLeft:'-25px'}}>View Details</Text>
                          <AntDesign name="arrowright" size={10} color="#004B46" style={{paddingLeft:5,marginTop:10,marginLeft:'-2px'}} />
                      </View>
                   </View>
                  </View>



                  

                  </ScrollView>
        </View>
        
       
       
    

 
      </>
  );
};

export default Parchase;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F8F8F8",
        display: 'flex',
        flexDirection: 'column',
   
        
    },
    headerContainer: {
        backgroundColor: '#BBBBBB',
        paddingTop: 25,
        paddingHorizontal: 12,
        paddingBottom:10
        
    },
    headeritem1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
  
    headerCircle: {
        backgroundColor: ' rgba(255, 255, 255, 0.4)',
        height: 46,
        width: 46,
        borderRadius:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // zIndex:-1
       
  
    },
    Available: {
        backgroundColor: '#2AB930',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '62px',
        height: 16,
        borderRadius:50,
      marginTop:'-15px'
    },
    headeritem2: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        paddingLeft:8
        
    },
    menuButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:25
    },
    menuButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
      paddingTop:5
    },
    circle: {
        backgroundColor: '#2AB930',
        height: 20,
        width: 20,
        borderRadius:50,
        marginTop:10
    
    },
    menuButtonText1: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
      
    },

   heading: {
        display: 'flex',
       paddingHorizontal: 12,
  paddingTop:10
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderColor: 'whitesmoke',
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 12,
        marginTop: 20,
        
        
    },
    item: {
        paddingVertical: 10,
       
        display: 'flex',
        justifyContent: 'center',
      alignItems:'center'
    },
    item1: {
        paddingVertical: 10,
    paddingRight:25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      
    },
    itme3:{
        backgroundColor: '#FF004E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 42,
        height: 12,
        borderRadius:50,
        
    },
    item4:{
        backgroundColor: '#FF9F1C',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '69px',
        height: 16,
        borderRadius:50,
        marginLeft:'-25px'
    }
});
