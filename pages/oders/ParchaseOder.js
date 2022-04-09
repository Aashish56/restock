import React from "react";
import {
  StyleSheet,
  Text,
  View,
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
const ParchaseOder = ({ navigation }) => {
 
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
                  <FontAwesome name="navicon" size={24} color="black" />
                  </View> 
                  
                 <Text style={styles.headertitle}>Parchase Oders</Text>
                
              </View>
              

              <View style={styles.odercontainer}>
                  <View style={styles.oderHeading}><Text style={styles.oderHeadingtext}>Current Orders (5)</Text></View>
                  <View style={styles.oderHeading}><Text style={styles.oderHeadingtext}>Order History (15)</Text></View>
              </View>
              
              <View style={styles.suggetioncontainer}>
                  <View style={styles.suggetionActive}>
                      <Text style={styles.suggetionActivetext}>Pending</Text>
                  </View>
                  <View style={styles.suggetion}>
                      <Text  style={styles.suggetiontext}>In Process</Text>
                  </View>
                  <View style={styles.suggetion}>
                      <Text style={styles.suggetiontext}>Shipped</Text>
                  </View>
              </View>
              <View style={styles.inputcontainer}>
                  <AntDesign name="search1" size={24} color="black" style={{marginHorizontal:10}}/>
                  <TextInput placeholder="Filter results.."style={ styles.inputbox}/>
              </View>

              <ScrollView showsHorizontalScrollIndicator={false} style={{paddingBottom:'80px'}}>
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
                  
              </ScrollView>
        </View>
        
   
       
    

 
      </>
  );
};

export default ParchaseOder;

const styles = StyleSheet.create({
  container: {
        height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
   
        
  },

header:{
 display: 'flex',
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 25,
    paddingHorizontal: 12,
 paddingBottom:15
    },
    headertitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:20
    },
    odercontainer: {
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 8,
        paddingHorizontal: 12,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        // justifyContent: 'space-between',
        alignItems: 'flex-start',
        // flex:1   
    },
    oderHeading: {
        display: 'flex',
        // // flex: .5,
        // justifyContent: 'center',
        borderBottomColor: '#004B46',
        borderBottomWidth: 2,
        // paddingHorizontal: 12,
        paddingBottom: 17,
        alignItems: 'flex-start',
        marginRight:40
       
    },
    oderHeadingtext: {
        fontSize: 12,
        fontWeight:'600'
    },
    suggetioncontainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 15,
        justifyContent: 'flex-start',
        alignItems:'center'
        
    },
    suggetion: {
        height: 23,
        borderColor: '#26C889',
        borderWidth: 1,
        borderRadius:50,
  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      marginRight:12
    },
    suggetionActive: {
        height: 23,
        borderColor: '#26C889',
        borderWidth: 1,
        borderRadius:50,
        backgroundColor: '#003D34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      marginRight:10
    },
    suggetionActivetext: {
        color: 'white',
        fontSize: 11,
        fontWeight: '600',
        textAlign:'center'
    },
    suggetiontext: {
        color: '#004B46',
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
        
    },
    inputcontainer: {
        borderColor: '#F4F4F4',
        height: 46,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius:8,
        marginHorizontal: 12,
        flexDirection: 'row',
       
       alignItems:'center'
    },
    inputbox: {
        height: 45,
        width: '100%',
      
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
