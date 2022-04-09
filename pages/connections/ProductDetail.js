import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from "react-native-web";
const ProductDetail = ({ navigation }) => {
 
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
              <View style={{height:'100%'}}>
              <View style={styles.header}>
              <AntDesign name="arrowleft" size={18} color="white" />
                  <View style={{display:'flex',flexDirection:'row',paddingTop:10,paddingBottom:10,alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'white',fontSize:19,fontWeight:'600'}}>Black bag</Text>
                      <AntDesign name="hearto" size={24} color="white" />
                  </View>
                  </View> 
                  <ScrollView style={{ height: '82%',paddingBottom:20 }}>
         <View>
              <ScrollView horizontal={true} showsVerticalScrollIndicator={false}
              style={{paddingLeft:12,paddingTop:15,}}>
        
                          <View style={styles.scrollImage}>
                          <Image source={require('../../assets/card2.png')} style={{height:'133px',width:'135px'}}/>
                  </View>
                  <View  style={styles.scrollImage}>
                          <Image source={require('../../assets/card2.png')} style={{height:'133px',width:'135px'}}/>
                  </View>
                  <View style={styles.scrollImage}>
                          <Image source={require('../../assets/card2.png')} style={{height:'133px',width:'135px'}}/>
                  </View>
                  <View style={styles.scrollImage}>
                          <Image source={require('../../assets/card2.png')} style={{height:'133px',width:'135px'}}/>
                  </View>
                   </ScrollView>
              <View style={{paddingTop:15,paddingHorizontal:12}}>
                  
                  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:22,fontWeight:'600'}}>black bag</Text>
                      <View style={styles.addToCard}>
                          <Text style={{fontSize:12,fontWeight:'600',color:'white'}}>Add to card</Text>
                      </View>
                  </View>
                  <View style={{paddingTop:6}}>
                      <Text style={styles.price}>₹850.40 - ₹1210.50</Text>
                  </View>
                  <View style={{display:'flex',flexDirection:'row',paddingTop:6}}>
                      <Text style={{fontSize:20,fontWeight:'700',color:'#FFC833'}}>4/5</Text>
                      <MaterialIcons name="star" size={24} color="#FFC833" style={{marginLeft:8}} />
                      <MaterialIcons name="star" size={24} color="#FFC833" />
                      <MaterialIcons name="star" size={24} color="#FFC833" />
                      <MaterialIcons name="star-half" size={24} color="#FFC833" />
                      <MaterialIcons name="star" size={24} color="#EBF0FF" />
                  </View>
              </View>
              
                  <View style={{paddingTop:15,paddingHorizontal:12}}>
                      <View style={{paddingTop:5}}>
                          <Text style={{fontSize:12,fontWeight:'600',opacity:.5}}>Color</Text>
                      </View>
                      <View style={{paddingTop:5,display:'flex',flexDirection:'row'}}>
                          <View style={styles.colorBox}><Text style={styles.colorName}>RED COLOR</Text></View>
                          <View style={styles.colorBox}><Text style={styles.colorName}>RED COLOR</Text></View>
                          <View style={styles.colorBox}><Text style={styles.colorName}>RED COLOR</Text></View>
                      </View>

                      <View style={{paddingTop:15}}>
                          <Text style={{fontSize:12,fontWeight:'600',opacity:.5}}>Size</Text>
                      </View>
                      <View style={{paddingTop:5,display:'flex',flexDirection:'row'}}>
                          <View style={styles.colorBox}><Text style={styles.colorName}>L</Text></View>
                          <View style={styles.colorBox}><Text style={styles.colorName}>M</Text></View>
                          
                          </View>
                          

                          <View style={{paddingTop:20}}>

                              <Text style={{fontSize:12,fontWeight:'600',opacity:0.5}}>SPECIFICATIONS</Text>
                              <View style={styles.productDescription}>
                                      <Text style={{fontSize:12,color:'#00234B'}}>Shown:</Text>
       
                                  <Text style={{width:'171px',fontSize:14,fontWeight:'500',textAlign:'left',}}>Laser Blue/Anthracite/Watermelon/White</Text>
                          
                                      </View>
                              <View style={styles.productDescription}>
                                  <Text style={{fontSize:12,color:'#00234B'}}>Style:</Text>
                                  <Text style={{fontSize:14,fontWeight:'500'}}>CD0113-400</Text>
                              </View>
                              <Text style={{textAlign:'left',fontSize:14,letterSpacing:'0.5px',paddingTop:15}}>The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.</Text>
                          </View>
                          </View>
                          <View style={{paddingTop:25,paddingHorizontal:12}}>
                              <Text style={{fontSize:12,fontWeight:'600',opacity:0.5}}>REVIEWS & RATINGS</Text>
                              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                  <View style={{display:'flex',flexDirection:'row',paddingTop:8}}>
                                  <MaterialIcons name="star" size={15} color="#FFC833"  />
                                  <MaterialIcons name="star" size={15} color="#FFC833" />
                                  <MaterialIcons name="star" size={15} color="#FFC833" />
                                  <MaterialIcons name="star-half" size={15} color="#FFC833" />
                                      <MaterialIcons name="star" size={15} color="#EBF0FF" />
                                      <Text style={{color:'rgba(0, 75, 70, 0.65)',fontSize:10,fontWeight:'bold',paddingRight:8,paddingLeft:8}}>4.5</Text>
                                      <Text style={{ color: 'rgba(0, 75, 70, 0.65)', fontSize: 10, }}>(5 Review)</Text>
                                  </View>
                                  <Text style={{color:'#004B46',fontSize:14,fontWeight:'500',marginTop:'-8px'}}>See More</Text>
                                  </View>
                         
                          </View>


                          <View style={{paddingTop:35,paddingHorizontal:12}}>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <View>
                                      <Image source={require('../../assets/user.png')} style={{height:48,width:48}}/>
                                  </View>
                                  <View style={{paddingLeft:15,paddingTop:5}}>
                                      <Text style={{color:'#00234B',fontSize:14,fontWeight:'700'}}>James Lawson</Text>
                                      <View  style={{display:'flex',flexDirection:'row',paddingTop:4}}>
                                      <MaterialIcons name="star" size={15} color="#FFC833"  />
                                  <MaterialIcons name="star" size={15} color="#FFC833" />
                                  <MaterialIcons name="star" size={15} color="#FFC833" />
                                  <MaterialIcons name="star-half" size={15} color="#FFC833" />
                                      <MaterialIcons name="star" size={15} color="#EBF0FF" />
                                      </View>
                                      </View>
                              </View>

                              <Text style={{color:'rgba(85, 85, 85, 0.65)',fontSize:12,paddingTop:15,textAlign:'left'}}>Air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</Text>
                              <Text style={{color:'rgba(0, 75, 70, 0.65)',fontSize:10,paddingTop:15}}>December 10, 2016</Text>
                          </View>
                          </View>
             </ScrollView>
              </View>    
      </View>
    
   
 
      </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F8F8F8",
    // display: 'flex',      
  },
header:{
      paddingHorizontal: 12,
      paddingTop: 25,
      backgroundColor: '#26C889',   
    display: 'flex',
      height:'18%'
  },

    scrollImage: {
      paddingRight:12
  },
    addToCard: {
        backgroundColor: '#00665F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 27,
        width: '97px',
        borderRadius:50,
        // marginTop:3
    },
    price: {
        color: '#004B46',
        fontSize: 20,
        fontWeight:'600'
    },
    colorBox: {
        borderColor: 'rgba(0, 75, 70, 0.17)',
        borderWidth: 1,
        borderRadius: 5,
        marginRight:10
    },
    colorName: {
        padding: 10,
        fontSize: 10,
        fontWeight: '400',
        letterSpacing:0.5
    },
    productDescription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom:10
    },
});
