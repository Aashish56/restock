import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
    TextInput,
  Image
} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


import { ScrollView } from "react-native-web";
const SelectOrder = ({ navigation }) => {
 
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
                                  paddingLeft:4
                                  
                             
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
          
              </View>
              <ScrollView showsVerticalScrollIndicator={false} style={{
        display: 'flex',
                  height: '79%',
    
        
        backgroundColor: "#F8F8F8",
              }}>
        <View style={{display:'flex',alignItems:'flex-start',paddingTop:12,paddingHorizontal:12}}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>Select Product</Text>
              </View>
              <View style={styles.inputContainer}>
                  <AntDesign name="search1" size={24} color="black" style={{paddingLeft:5}}/>
                  <TextInput placeholder="Filter results" style={styles.input}/>
              </View>
      
                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View>   

                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View> 






                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View> 







                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View> 








                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View> 




                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <View>
                          <Image source={require('../../assets/card.png')} style={{height:96,width:98}}/>
                          </View>
                          <View style={styles.orderDetail}>
                              <Text style={{paddingVertical:8,fontSize:15,fontWeight:'700'}}>black bag</Text>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <Text style={{fontSize:12,fontWeight:'bold',color:'#004B46',paddingTop:3}}>₹</Text>
                                  <Text style={{fontSize:16,fontWeight:'bold',color:'#004B46'}}>1150</Text>
                                  <Text style={{paddingLeft:5,fontSize:10,fontWeight:'bold',color:'#777777',paddingTop:6}}>₹</Text>
                                  <Text style={{fontSize:13,fontWeight:'500',color:'#777777',paddingTop:3,textDecorationLine:'line-through'}}>1550</Text>
                              </View>
                              <View style={styles.circle}>
                                  <Text style={{fontSize:12,fontWeight:'600',color:'white',textAlign:'center'}}>Add to Order</Text>
                              </View>
                          </View>

                          <View style={{ paddingLeft: 25 }}>
                              <View style={{display:'flex',flexDirection:'row',paddingTop:12}}>
                              <Text style={{color:'#004B46',fontSize:10,fontWeight:'600'}}>View Details</Text>
                              <AntDesign name="arrowright" size={12} color="#004B46"style={{paddingLeft:8}} />
                              </View>
                              <View style={{backgroundColor:'#FAA333', height:17,width:58,borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View>
                          </View>
                  </View>
                  
                  
                  </View> 
     </ScrollView>
       
      
          

     
              <View style={{height:40,backgroundColor:'#26C889',height:46,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'white',fontSize:18,fontWeight:'700',paddingLeft:10}}>₹1440 -</Text>
                      <Text style={{color:'white',fontSize:18,fontWeight:'700',}}> 2 items</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <MaterialIcons name="shopping-cart" size={24} color="white" />
                      <Text style={{color:'white',fontSize:18,fontWeight:'700',}}>Add to Order</Text>
                      <AntDesign name="arrowright" size={24} color="white"style={{paddingLeft:8,paddingRight:10,paddingTop:3}} />
                  </View>
               </View>
      </View>
    
   
 
      </>
  );
};

export default SelectOrder;

const styles = StyleSheet.create({
  container: {
        height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
    // flex: 1,

    justifyContent:'space-between'
        
  },
  bodycon:{
    paddingHorizontal: 12,
    paddingTop: 25, backgroundColor: 'white',
    // paddingBottom: 18,
    height: '14%',
    // flex: .1,
    display: 'flex',
    borderBottomColor: 'whitesmoke',
      borderBottomWidth: 1,
    paddingBottom:10
    // marginBottom:'-100px'           
  },
 
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
  sales_purchase_text: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
    textAlign:'left'
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
              paddingLeft:4
                          
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
    width: 58,
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
    inputContainer: {
        marginHorizontal: 12,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderColor: '#F4F4F4',
        borderWidth: 1,
        borderRadius:8,
        height:46
        
    },
    input: {
        
        paddingLeft: 10,
        height: 46,
        width: '100%',
        
},    
    cardContainer: {
        marginTop: 10,
        display: 'flex',
        marginHorizontal: 12,
        borderColor: '#F4F4F4',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:12
    
},
    circle: {
        backgroundColor: '#00665F',
        height: 27,
        borderRadius:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '101px',
        marginTop:10
 }, 
 card: {
     display: 'flex',
     flexDirection: 'row',
     padding: 10,
     
    },
    orderDetail: {
        paddingLeft: 10,
        paddingBottom:10
 },
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
