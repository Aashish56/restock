import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const Profile = ({ navigation }) => {
 
  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (
  
  
    <View style={styles.container}>
      <View style={{marginHorizontal:12}}>
      
              <View style={styles.menuButton}>
              <TouchableOpacity>
                      <AntDesign name="arrowleft" size={18} color="#003D34" />
                      </TouchableOpacity>
                    
          </View>
        <View style={styles.veryfication}>
          <View style={styles.verycontainer}>
            <View style={styles.rightcon} >
            <FontAwesome5 name="user-circle" size={44} color="black" />
            </View>
            <View style={{marginLeft:10}}>
              <Text style={{
                fontSize: 19,
                fontWeight:'600',
              }}>sumit sir.</Text>
              <Text style={{
                fontSize: 12,
                color:'#00000099',
              }}>(+91)78xxxxxxxx</Text>
            </View>
            
          </View>
          
          <View style={styles.leftcon}><TouchableOpacity>
                <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
          
            </View>
            
        </View>
        


        <View style={styles.con}>
          <View style={{marginLeft:15}}>
            <View style={styles.con1}>
              <AntDesign name="check" size={10} color="white" />
            </View>
            <Text style={styles.textcon1}>Email Verification</Text>
          </View>
          <View style={{
            marginLeft: 25, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}>
            <View style={{
              width: 20,
              height: 20,
              borderRadius:10,
              backgroundColor: '#E40046',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              
            }}><Entypo name="cross" size={10} color="white" /></View>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '600', color: '#777777',
                marginTop: 5
              }} >Phone Verification</Text>
            <TouchableOpacity>
              <View style={{
                display: 'flex',
                flexDirection:'row',
              }}>
                <Text style={{
                  color: '#004B46', fontSize: 10,
                  fontWeight: '600',
                  marginTop:3
                }}>Re Verify</Text>
                <AntDesign name="arrowright" size={10} color="#004B46"
                style={{marginTop:5,marginLeft:5}}
                />
                </View>
            </TouchableOpacity>
          </View>


        </View>

        
        <View style={styles.iconcontainer}>
          <View style={styles.iconcontainer1}>
            <View style={styles.iconcontainer2}><Text style={styles.firstcontent}>B</Text></View>
            <Text style={styles.business}>Business profile</Text>
            <View style={styles.firstView}>
              <Text style={styles.textcon}>3</Text>
            </View>
            <View style={styles.firstView1}>
             
              <Text style={{
                fontSize: 10,
                fontWeight: '500',
                color:'#004B46'
              }}>Manage</Text>
              <AntDesign name="arrowright" size={10} color="#004B46"
                style={{marginTop:5,marginLeft:5}}
              />  
            </View>
          </View>
          

          <View style={styles.maincon}>
            <View style={styles.mainView}><Ionicons name="ios-location-outline" size={24} color="black" /></View>
            <Text style={styles.maintext}>Address</Text>
           
         
          </View>
          




          <View style={styles.maincon}>
            <View style={styles.mainView}><Entypo name="share" size={24} color="black" /></View>
            <Text style={styles.maintext}>Share restock</Text>
           
          </View>
          





          <View style={styles.maincon}>
            <View style={styles.mainView}><AntDesign name="enviromento" size={24} color="black" /></View>
            <Text style={styles.maintext}>Invite a Business</Text>
          
          </View>
          










          <View style={styles.maincon}>
            <View style={styles.mainView}><MaterialIcons name="privacy-tip" size={24} color="black" /></View>
            <Text style={styles.maintext}>Privacy Policy</Text>
           
          </View>
          








          <View style={styles.maincon}>
            <View style={styles.mainView}><MaterialIcons name="star-rate" size={24} color="black" /></View>
            <Text style={styles.maintext}>Rate us on Play Store</Text>
         
          </View>
          






          <View style={styles.maincon}>
            <View style={styles.mainView}><Feather name="help-circle" size={24} color="black" /></View>
            <Text style={styles.maintext}>Help</Text>
       
          </View>
          






          <View style={styles.maincon}>
            <View style={styles.mainView}><AntDesign name="logout" size={24} color="black" /></View>
            <Text style={styles.maintext}>Log out</Text>
           
          </View>
          

        </View>
  
      </View>
    
                  
                 
     
    </View>
   
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
        // height: "100%",
    backgroundColor: "#F8F8F8",
    paddingBottom:15
  },
  menuButton: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  con1:{
    width: 20,
    height: 20,
    borderRadius:10,
    backgroundColor: '#2AB930',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:30
  },
  textcon1:{
    fontSize: 10,
    fontWeight: '600', color: '#777777',
    marginTop:5
  },
  business:{
    marginLeft: 10,
    fontSize: 14,
    fontWeight:'500'
  },
  veryfication:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
   
    flex:1,
  },
  textcon:{
    fontSize: 10,
    fontWeight: '700',
    color:'white'
  },
  edit:{
    height: 40,
   
    fontSize: 12,
    fontWeight:'600',
  },
  con:{
    backgroundColor: 'white',
    height: '86px',
    borderRadius:10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20
    
    
  },
  firstView:{
    width: 15,
    height: 15,
    borderRadius:8,
    backgroundColor: '#FAA333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:6
  },
  verycontainer:{
    display: 'flex',
    flexDirection: 'row',
    flex: .9,
  
    
  },
  rightcon:{
    width: 46,
    height: 46,
    borderRadius: 23,
   
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  },
  firstView1:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
   
    marginLeft:15
  },
  leftcon:{
    display: 'flex',
    alignItems: 'center',
      flex: .2,
      backgroundColor: 'white',
      width: 48,
    height: 20,
    marginTop: 5,
    borderRadius:33
   
  },
  iconcontainer:{
    display: 'flex',
    flexDirection: 'column',
    marginTop:20

  },
  iconcontainer1:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
    
  },
  firstcontent:{
    color: '#115752', fontSize: 20,
    textAlign: 'center',
  fontWeight:'800',
  },
  iconcontainer2:{
    height: 41,
    width: 41,
    borderRadius: 21,
    backgroundColor: '#cbf5ea',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
maincon:{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop:10
  
  },
mainView:{
  height: 41,
  width: 41,
  borderRadius: 21,
  backgroundColor: '#cbf5ea',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center'
  },
maintext:{
  marginLeft: 10,
  fontSize: 14,
  fontWeight:'500'
},

});
