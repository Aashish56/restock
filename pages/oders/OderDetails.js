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
const OderDetail = ({ navigation }) => {
 
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
                  <View>
                  <AntDesign name="arrowleft" size={24} color="black" />
                  </View> 
                  <View style={styles.headeritem}>
                      <Text style={styles.headertitle}>#122123121</Text>
                      <View style={styles.headerprocess}>
                          <Text style={styles.headertitle1}>PROCESSING</Text>
                      </View>
                 </View>
              </View>
              
              <View style={styles.cardContainer}>
                  <View style={styles.carditem}>
                      <Text style={{color:'#777777',fontSize:10,fontWeight:'600',paddingBottom:4}}>Oder Details</Text>
                      <Text style={styles.cardtitle}>Oder At</Text>
                      <Text style={styles.cardtitle}>Estimated Amount</Text>
                      <Text style={styles.cardtitle}>Oder By</Text>
                  </View>
                  <View style={styles.carditem1}>
                      <Text style={styles.cardtitle}>Jan 25, 01:24 AM</Text>
                      <Text style={styles.cardtitle}>2402</Text>
                      <View style={styles.carditem2}>
                          <View style={styles.circle}>
                              <Text style={{fontSize:9,fontWeight:'700'}}>DE</Text>
                          </View>
                          <Text  style={{fontSize:10,fontWeight:'500',marginLeft:6}}>Dana’s Bedsheets</Text>
                      </View>
                  </View>
              </View>
              



              <View style={styles.odermanagecontainer}>
                  <View style={styles.oderitem}>
                      <View style={{paddingTop:5}}>
                          <Text style={{fontSize:10,fontWeight:'600',color:'#777777',paddingVertical:5}}>Manage Order</Text>
                          <Text style={styles.oderitemtext}>MAnager</Text>
                          <Text style={styles.oderitemtext}>Status</Text>
                      </View>
                      <View style={{paddingRight:25,paddingTop:35}}>
                          <View style={{display:'flex',flexDirection:'row'}}>
                              <View style={styles.circle}>
                              <Text style={{fontSize:9,fontWeight:'700'}}>DE</Text>
                              </View>
                              <Text  style={{fontSize:10,fontWeight:'500',marginLeft:6,paddingTop:7}}>Sumit Rana</Text>
                              <AntDesign name="caretdown" size={10} color="black" style={{paddingLeft:7,paddingTop:8}} />
                          </View>
                          <View style={{display:'flex',flexDirection:'row',paddingTop:10}}>
                              <Text style={{fontSize:10,fontWeight:'400'}}>PROCESSONG</Text>
                              <AntDesign name="caretdown" size={10} color="black" style={{paddingLeft:7}}/>
                          </View>

                      </View>
                  </View>
                  <View style={styles.oderitem1}>
                      <View style={styles.Iconstyle}>
                        
                          <FontAwesome name="phone" size={24} color="#004B46" style={ styles.icon}/>
                          <Text style={styles.iconText}>Call</Text>
                      </View>
                      <View style={styles.IconContainer}>
                        
                          <AntDesign name="message1" size={24} color="#004B46" style={ styles.icon1}/>
                          <Text style={styles.iconText1}>Message</Text>
                      </View>
                      <View style={styles.Iconstyle}>
                         
                          <AntDesign name="ellipsis1" size={24} color="#004B46" style={ styles.icon2} />
                          <Text  style={styles.iconText2}>Cancel</Text>
                      </View>
                  </View>

              </View>
              <View style={styles.productContainer}>
                       <Text style={{color:'#777777',fontSize:10,fontWeight:'600'}}>Ordered Items (2)</Text>
                  <View style={styles.productCard}>
                      <View style={styles.imgConatainer}>
                     
                          <Image source={require('../../assets/card.png')} style={{height:'60px',width:'60px'}}/>
                     
                      <View style={styles.productDetail}>
                          <Text style={{fontSize:15,fontWeight:'700'}}>black bag</Text>
                          <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingVertical:5}}>1 piece</Text>
                          <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,}}>Red color</Text>
                      </View>
                      </View>
                  <View style={styles.priceContainer}>
                      <Text style={{color:'#004B46',fontSize:14,fontWeight:'600',paddingTop:3}}>₹</Text>
                      <Text style={{color:'#004B46',fontSize:16,fontWeight:'bold'}}>1500</Text>
                      <Text style={{textDecorationLine:'line-through',paddingLeft:5,color:'#777777',fontSize:10,paddingTop:5}}>₹</Text>
                      <Text style={{textDecorationLine:'line-through',fontSize:13,color:'#777777',fontWeight:'500',paddingTop:2}}>1500</Text>
                </View>
                  </View>
                  <View style={styles.productCard}>
                      <View style={styles.imgConatainer}>
                     
                          <Image source={require('../../assets/card.png')} style={{height:'60px',width:'60px'}}/>
                     
                      <View style={styles.productDetail}>
                          <Text style={{fontSize:15,fontWeight:'700'}}>black bag</Text>
                          <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,paddingVertical:5}}>1 piece</Text>
                          <Text style={{fontSize:10,fontWeight:'600',opacity:0.5,}}>Red color</Text>
                      </View>
                      </View>
                  <View style={styles.priceContainer}>
                      <Text style={{color:'#004B46',fontSize:14,fontWeight:'600',paddingTop:3}}>₹</Text>
                      <Text style={{color:'#004B46',fontSize:16,fontWeight:'bold'}}>1500</Text>
                      <Text style={{textDecorationLine:'line-through',paddingLeft:5,color:'#777777',fontSize:10,paddingTop:5}}>₹</Text>
                      <Text style={{textDecorationLine:'line-through',fontSize:13,color:'#777777',fontWeight:'500',paddingTop:2}}>1500</Text>
                </View>
                      </View>
              </View>
             
        </View>
        
   
       
    

 
      </>
  );
};

export default OderDetail;

const styles = StyleSheet.create({
  container: {
        // height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
   paddingBottom:'200px'
        
  },

header:{
 display: 'flex',
 flexDirection: 'column',
 paddingTop:25,
 justifyContent: 'flex-start',
    
    paddingHorizontal: 12,
 paddingBottom:15
    },
    headeritem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingLeft:3
},
    headertitle: {
        fontSize: 18,
        fontWeight:'bold'
    },
    headerprocess: {
        backgroundColor: '#FF9F1C',
        height: 21,
        width: '91px',
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:2
    },
    headertitle1: {
        color: 'white',
        fontSize: 11,
        fontWeight: '600',
        textAlign:'center'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius:8,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        marginHorizontal: 12,
        paddingHorizontal: 12,
        paddingVertical:12
        
    },
    carditem: {
        display: 'flex',
        alignItems: 'flex-start',
      justifyContent:'space-between'
    },
    cardtitle: {
        paddingVertical: 6,
        paddingRight: 10, 
        color: '#777777',
        fontSize: 12,
        fontWeight:'600'
    },
    carditem1: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingTop:20
    },
    carditem2: {
        display: 'flex',
      flexDirection:'row',
        justifyContent: 'space-between',
      alignItems:'center'
    },
    circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCDDEC',
        height: 28,
        width: 28,
        borderRadius:50
       
    },
    odermanagecontainer: {
        display: 'flex',
        borderColor: 'whitesmoke',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius:8,
        marginHorizontal: 12,
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical:5
    },
    oderitem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      justifyContent:'space-between'
    },
    oderitem1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      
    },
    oderitemtext: {
        paddingVertical: 10,
        color: '#777777',
        fontSize: 12,
        fontWeight:'600'
    },
    IconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    icon: {
        
        paddingRight: 25,
        
    },
    iconText: {
        paddingRight: 25,
        textAlign: 'center',
        paddingBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#004B46',
        paddingTop:6
    },
    icon1: {
        
        paddingRight: 25,
        
    },
    iconText1: {
        paddingRight: 25,
        textAlign: 'center',
        paddingBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#004B46',
        paddingTop:3
    },
    icon2: {
        
        paddingLeft:10
        
    },
    iconText2: {
        paddingRight: 25,
        textAlign: 'center',
        paddingBottom: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#004B46',
        paddingTop:3
    },
    productContainer: {
        display: 'flex',
        borderRadius:8,
        marginHorizontal: 12,
        borderColor: 'whitesmoke',
        backgroundColor: 'white',
        marginTop: 15,
        paddingHorizontal: 12,
        paddingVertical:15
    },
    productCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      justifyContent:'space-between'
    },
    imgConatainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical:12
    },
    productDetail: {
        display: 'flex',
        paddingLeft: 15,
        alignItems:'flex-start'
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop:30
    },
});
