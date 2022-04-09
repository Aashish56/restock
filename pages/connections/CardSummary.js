import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ScrollView } from "react-native-web";
const CardSummary = ({ navigation }) => {
 
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
                      <View style={styles.headerContent}>
                      <FontAwesome5 name="shopping-bag" size={24} color="white"style={{paddingRight:20}} />
                      <Text style={{color:'white',fontSize:19,fontWeight:'600'}}>Black bag</Text>
                      
                  </View>
                  </View> 
         <ScrollView>
                  
                  <View style={{display:'flex',flexDirection:'row',paddingHorizontal:12,paddingTop:15}}>
                      <View style={styles.circle}>
                          <Text style={{fontSize:16,fontWeight:'700',color:'white'}}>DE</Text>
                      </View>
                      <View style={{paddingLeft:15,paddingTop:5}}>
                          <Text style={{fontSize:15,fontWeight:'700'}}>Dana Electronics</Text>
                          <Text style={{fontSize:12,color:'#A6A6A6'}}>Manufactorer - Electronics</Text>
                      </View>
                      </View>

                      <View style={styles.cardContainer}>
                          <View style={styles.card}>
                              <View style={{display:'flex',flexDirection:'row'}}>
                                  <View>
                                      <Image source={require('../../assets/card2.png')} style={{height:'95px',width:'97px'}}/>
                                  </View>
                                  <View>
                                      <Text>Black Bag</Text>
                                      <Text>Size: X | Color: Red</Text>
                                      <View style={{display:'flex',flexDirection:'row'}}> 
                                          <View style={{display:'flex',flexDirection:'row'}}>
                                         <Text>₹</Text>
                                          <Text>1150</Text>
                                          <Text>₹</Text>
                                          <Text>1550</Text>
                                          </View>
                                          <View style={styles.discount}><Text>75% OFF</Text></View>
                                      </View>
                                      <View style={styles.quentity}>
                                      
                                          <AntDesign name="minuscircle" size={24} color="black" />
                                          <Text>4</Text>
                                          <AntDesign name="pluscircle" size={24} color="black" />
                                          
                                          </View>
                                  </View>
                              </View>
                              <View>
                              <MaterialCommunityIcons name="delete" size={24} color="black" />
                              </View>

                              
                          </View>
                      </View>
                      </ScrollView>
              </View>    
      </View>
    
   
 
      </>
  );
};

export default CardSummary;

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
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center', 
    },
    circle: {
        height: 46,
        width: 46,
        borderRadius:50,
        backgroundColor: '#004B46',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    
    cardContainer: {
        paddingHorizontal: 12,
        
    },
    card: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius:8,
        borderColor: '#F4F4F4',
        borderWidth:1,
        marginTop: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection:'row'
        
    },
    discount: {
        backgroundColor: '#FAA333',
        width: '58px',
        height: 17,
        borderRadius:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    quentity: {
        display:'flex',flexDirection:'row'
    },

});
