import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
    TextInput,
  Image
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from "react-native-web";
const ProductsListing = ({ navigation }) => {
 
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
              <View style={styles.header}>
                  <View style={{display:'flex',flexDirection:'row'}}>
                      <View style={styles.headercircle}>
                          <Text style={{color:'white',fontWeight:'700',fontSize:16}}>DE</Text>
                      </View>
                      <View style={{paddingTop:5,paddingLeft:20}}>
                          <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Dana’s Bedsheets</Text>
                          <Text style={{color:'rgba(255, 255, 255, 0.6)',fontSize:12}}>Manufactorer - Electronics</Text>
                      </View>
                  </View>
                
             </View>
          
             <View style={styles.headerHeading}>
                  <Text style={styles.products}>Products (6)</Text>
                  <Text style={{ paddingLeft: 35, color: '#5A5A5A', fontSize: 13, fontWeight: '600' }}>
                      COLLECTIONS (3)</Text>
            </View>
              <ScrollView showsVerticalScrollIndicator={false} style={{
        display: 'flex',
                  height: '65%',
    
        
        backgroundColor: "#F8F8F8",
              }}>
  
              <View style={styles.inputContainer}>
                  <AntDesign name="search1" size={18} color="black" style={{paddingLeft:5}}/>
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                              {/* <View style={{marginTop:15,display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',backgroundColor:'#d7fcf0',width:'68px',height:22,borderRadius:50,}}>
                                  <AntDesign name="minuscircle" size={20} color="#00665F" style={{paddingLeft:2}} />
                                  <Text style={{fontSize:16,fontWeight:'700'}}>1</Text>
                                  <AntDesign name="pluscircle" size={20} color="#00665F" style={{paddingRight:2,textAlign:'center'}} />
                              </View> */}
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
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
                              <View style={{backgroundColor:'#FAA333', height:17,width:'58px',borderRadius:50,marginTop:17,marginLeft:'-30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize:10,fontWeight:'600',color:'white'}}>75% OFF</Text>
                              </View>
                           
                          </View>
                  </View>
                  
                  
                  </View> 


                  <View style={{marginTop:25,marginBottom:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#999999',fontSize:16,fontWeight:'700'}}>That’s it. No more catalogs found.</Text>
                  </View>
     </ScrollView>
       
      
          

     
              <View style={{height:40,backgroundColor:'#00665F',height:46,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
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

export default ProductsListing;

const styles = StyleSheet.create({
  container: {
        height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
    // flex: 1,

    justifyContent:'space-between'
        
  },
header:{
    paddingHorizontal: 12,
      paddingTop: 25,
      backgroundColor: '#26C889',  
    height: '16%',
    display: 'flex',
    paddingBottom:15,         
  },

    headercircle: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        width: 46,
        borderRadius:50
    },
    headerHeading: {
        height: '9%',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:25
    }, 
    products: {
        borderBottomColor: '#004B46',
        borderBottomWidth: 2,
        marginTop: 15,
        paddingBottom: 13,
        color: '#004B46',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1
    },    

  sales_purchase_text: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
    textAlign:'left'
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

});
