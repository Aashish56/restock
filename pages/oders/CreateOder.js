import React from "react";
import {
  StyleSheet,
  Text,
    View,
  Image,
  TouchableOpacity,
  TextInput
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
const CreateOder = ({ navigation }) => {
 
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
       <View style={styles.bodycon}>
              <View style={styles.header}>
                  <View>
                  <FontAwesome name="navicon" size={24} color="black" />
                  </View> 
                  <View>
                      <View style={styles.headerView1}> <Text style={styles.headertext1}>DB</Text></View>
                  </View>
                  <View style={styles.headerView2}>
                      <Text style={styles.headertext2}>Black bag</Text>
                      <Text style={styles.headertext3}>(owner)</Text>
                      <TouchableOpacity>
                          <AntDesign name="caretdown" size={10} color="black"
                              style={{
                                  marginTop: 4,
                                  
                             
                              }}
                              />
                      </TouchableOpacity>
                  </View>
                  <View style={styles.headerView3}>
                      <View style={styles.headerView4}>
                          <Text style={styles.headertext4}>Active</Text> 
                          <Fontisto name="radio-btn-active" size={13} color="white"
                              style={{marginLeft:3}}/>    
                  </View>
                  </View>
                  </View>
                
                  <View style={styles.pagetitleContainer}>
                     <Text style={{fontSize:16,fontWeight:'700'}}>Create an Order</Text>
                    <Text style={{paddingTop:5,fontSize:12,fontWeight:'500',color:'#777777'}}>All connections are only for the selected business only. Please change business for other connections.</Text>
                  </View>
                  <View style={styles.selectCustomerContainer}>
                      <View style={styles.circleContainer}>
                          <View style={styles.circle}>
                              <Text style={{fontSize:18,fontWeight:'700',color:'white'}}>DE</Text>
                          </View>
                          <View style={styles.shopname}>
                              <Text style={{fontSize:15,fontWeight:'700'}}>Dana Electronics</Text>
                              <Text style={{fontSize:12,fontWeight:'400',paddingVertical:4,color:'#A6A6A6'}}>Manufactorer - Electronics</Text>
                          </View>
                      </View>
                      <Text style={{color:'#555555',fontSize:13,fontWeight:'600',paddingVertical:8,paddingLeft:10}}>Select a customer</Text>
                      </View>
                     
                  <View style={styles.selectCustomerContainer}>
                      <View style={styles.card}>
                          <View style={{display:'flex',flexDirection:'row'}}>
                              <Text style={{fontSize:14,fontWeight:'700'}}>Products</Text>
                              <Text style={{color:'#555555',fontSize:10,fontWeight:'600',paddingLeft:3}}>(4 items)</Text>
                              </View>
                              
                          <View style={styles.cardContainer}>
                              
                              <Image source={require('../../assets/card.png')} style={{height:'60px',width:'60px'}}/>
                             
                             <View style={styles.oderDetail}>
                                  <Text style={{fontSize:15,fontWeight:'700'}}>Black Bag</Text>
                                  <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingTop:5}}>1 piece</Text>
                                  <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingTop:5}}>Red Color</Text>
                            </View> 
                               
                              <View style={styles.priceContainer}>
                                  <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold',paddingTop:3}}>₹</Text>
                                  <Text style={{color:'#004B46',fontSize:16,fontWeight:'bold'}}>1500</Text>
                              </View>
                          </View>

                      </View>
                      <View style={styles.card}>
                          
                          <View style={styles.cardContainer}>
                              
                              <Image source={require('../../assets/card.png')} style={{height:'60px',width:'60px'}}/>
                             
                             <View style={styles.oderDetail}>
                                  <Text style={{fontSize:15,fontWeight:'700'}}>Black Bag</Text>
                                  <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingTop:5}}>1 piece</Text>
                                  <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingTop:5}}>Red Color</Text>
                            </View> 
                               
                              <View style={styles.priceContainer}>
                                  <Text style={{color:'#004B46',fontSize:14,fontWeight:'bold',paddingTop:3}}>₹</Text>
                                  <Text style={{color:'#004B46',fontSize:16,fontWeight:'bold'}}>1500</Text>
                              </View>
                          </View>

                      </View>
                      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:2}}>
                          <AntDesign name="pluscircle" size={18} color="#00665F" />
                          <Text style={{fontSize:13,fontWeight:'600',paddingLeft:5,textAlign:'center'}}>Add Products</Text>
                      </View> 
                      
                     



                  </View>

                  <View style={styles.selectCustomerContainer}>
                          <Text style={{color:'#004B46',fontSize:14,fontWeight:'700'}}>Payment Details</Text>
                          <View style={styles.paymentContainer}>
                          <Text style={styles.priceHeading}>MRP Total </Text>
                          <Text style={styles.priceHeading}>₹1330</Text>
                      </View>
                      
                      <View style={styles.paymentContainer}>
                          
                          <Text style={styles.priceHeading}>Product Discount  </Text>
                          <Text style={styles.priceHeading}>-₹780</Text>
                      </View>
                      
                      <View style={styles.paymentContainer1}>
                      <Text style={{fontSize:13,fontWeight:'600',paddingLeft:5}}>Total Amount </Text>
                          <Text style={{color:'#004B46',fontSize:13,fontWeight:'bold',paddingRight:10}}>₹1330</Text>  
                      </View>
                      

                  </View>
                  
                  <View style={styles.button}>
                      <Text style={{fontSize:16,fontWeight:'600',color:'white',letterSpacing:1,textAlign:'center'}}>CREATE ORDER</Text>
                  </View>  
        </View>
        
          
    
    </View>
 
      </>
  );
};

export default CreateOder;

const styles = StyleSheet.create({
  container: {
        height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
  paddingBottom:20,

    justifyContent:'space-between'
        
  },
  bodycon:{
    paddingHorizontal: 12,
    paddingTop: 25, backgroundColor: 'white',
    // paddingBottom: 18,
    height: '5%',
    flex: .1,
    display: 'flex',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    // marginBottom:'-100px'           
  },
  buttomtext:{fontSize:12,fontWeight:'bold',color:'#004B46'},
header:{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor:'white'
},
headerView1:{
              width: 36,
              height: 36,
              borderRadius:18,
              backgroundColor: '#FF8FB2',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
                        
  },
  cardLine: {
    height: 1, width: 'auto', backgroundColor: 'whitesmoke',
    marginLeft: 4,
    marginRight:4
    
  },

headertext1:{
              color: 'white',
              fontSize: 14,
              fontWeight: '600',
              letterSpacing:2
},
headerView2:{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
                     
  },
 
headertext2:{
              color: '#003D34',
              fontSize: 15,
              fontWeight:'700'
},
headertext3:{
              fontSize: 10,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 2,
                          
}, 
headerView3:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginLeft:5
    
}, 
headerView4:{
    display: 'flex',
    width: '58px',
    height: 20,
    backgroundColor: '#26C889',
    borderRadius:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
},
headertext4:{
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    
    },  
    pagetitleContainer: {
        display: 'flex',
        paddingTop: 30,
        alignItems: 'flex-start',
        
},
    selectCustomerContainer: {
        display: 'flex',
        marginTop: 10,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius:8,
        backgroundColor: 'white',
        padding:10
    },
    circleContainer: {
        display: 'flex',
        flexDirection: 'row',
        
    },
 
    circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 46,
        width: 46,
        borderRadius:50,
  backgroundColor:'#004B46'
},

    shopname: {
        display: 'flex',
        alignItems: 'flex-start',
    paddingLeft:10
 } ,
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        borderBottomColor: '#DED9D3',
        borderBottomWidth:1
 
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingRight: 12,
        paddingVertical:10
    },
    oderDetail: {
        paddingHorizontal:15
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft:'80px'
    },
    paymentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomColor: '#DED9D3', 
        borderBottomWidth:1
    },
    paymentContainer1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 5,
         
        
    },
    priceHeading: {
        fontSize: 13,
        fontWeight: '600',
        color: '#555555',
        paddingLeft: 5,
        paddingRight:10
    },
    button: {
        backgroundColor: '#26C889',
        height: 46,
        borderRadius:8,
        marginTop: '150px',
        marginBottom:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        
    }
  // menuButton: {
  //   marginTop: 35,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems:'center',
  // },
  // description: {
  //   marginTop: 10,
  //   display: 'flex',
  //   alignItems: 'center',
  //   borderTopWidth: 1,
  //   borderTopColor: '#cfcfcf',
  //   paddingTop:6
  // },
  // listContainer: {
  //   marginTop: 20,
  //   display: 'flex',
  //   flexDirection: 'column',
  
  // },
});
