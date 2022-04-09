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
import UserCheckbox from "../signup/UserCheckBox";
const EditBusiness = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "back") {
      navigation.navigate("SelectABusiness");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (


    <View style={styles.container}>
      <View style={{ marginHorizontal: 12 }}>

        <View style={styles.menuButton}>
          <TouchableOpacity onPress={() => navigateToPage('back')}>
            <AntDesign name="arrowleft" size={18} color="#003D34" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Business</Text>
        </View>
        <View style={styles.container1}>
          <View>
            <View style={styles.container2}>
              <Feather name="shopping-bag" size={25} color="#00000066" />
            </View>
            <View style={styles.cardcontainer}>
              <AntDesign name="upload" size={10} color="white"
              />
            </View>

          </View>
          <Text style={styles.logotext}>Your business logo</Text>
        </View>
        <Text style={styles.businessname}>Business Name</Text>
        <View style={styles.inpubox}>
          <TextInput style={{
          
            marginLeft: 5
          }} placeholder="Dana’s Bedsheets"></TextInput>
        </View>

        <View style={styles.selectbusinesscontainer}>
          <Text style={{
            color: '#909090',
            fontSize: 11,
          }}>Select your primary business type</Text>
          <View style={styles.selectbusinesscard}>
            <TouchableOpacity>
              <View style={styles.cardstyle}>

                <FontAwesome5 name="user-clock" size={18} color="#004B46" />
                <Text style={styles.cardheading}>
                  Distributor</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.card}>

              <FontAwesome5 name="user-friends" size={18} color="black" />
              <Text style={{ color: '#3D3D3D', marginTop: 5, fontSize: 10, fontWeight: '700' }}>
                Distributor</Text>
            </View>

            <View style={styles.card}>


              <FontAwesome5 name="user-times" size={18} color="black" />
              <Text style={{
                color: '#3D3D3D',
                marginTop: 5, fontSize: 10, fontWeight: '700'
              }}>
                Distributor</Text>
            </View>

            <View style={styles.card}>
              <FontAwesome5 name="user-minus" size={18} color="black" />
              <Text style={{ color: '#3D3D3D', marginTop: 5, fontSize: 10, fontWeight: '700' }}>Distributor</Text>

            </View>
          </View>
        </View>

        <Text style={{
          color: '#909090',
          fontSize: 11,
          lineHeight: 22,
          fontWeight: 'normal',
          marginTop: 15
        }}>Business Phone / Restock ID</Text>
        <View style={styles.inputbox3}><Text style={{ textAlign: 'left', marginLeft: 8 }}>+91-</Text>
          <TextInput style={{
          
            marginLeft: 5
          }} placeholder="7018223344"></TextInput>
        </View>


        <Text style={styles.inpuboxheading}>GSTIN Number</Text>
        <View style={styles.inputbox3}>
          <TextInput style={{
          
            marginLeft: 5
          }} placeholder="234353243324"></TextInput>
        </View>



        <Text style={styles.inpuboxheading}>Business Email Address</Text>
        <View style={styles.inputbox3}>
          <TextInput style={{
           
            marginLeft: 5
          }} placeholder="business@gmail.com"></TextInput>
        </View>

        <Text style={styles.inpuboxheading}>Choose an address for business</Text>
        <View style={styles.addresscontainer}>
          <View style={styles.Checkbox}><UserCheckbox />

            <Text style={{ fontSize: 12, textAlign: 'left', marginLeft: 8 }}>
              #34, Aryan Enclave, Sector 9, Chandigarh, Aryan Enclave, Sector 9, Chandigarh, Punjab
            </Text>
          </View>
          <View style={styles.Checkbox}><UserCheckbox />

            <Text style={{ fontSize: 12, textAlign: 'left', marginLeft: 8 }}>
              #34, Aryan Enclave, Sector 9, Chandigarh, Aryan Enclave, Sector 9, Chandigarh, Punjab
            </Text>
          </View>
          <View style={styles.add_address}><Ionicons name="add-circle" size={24} color="#004B46" />

            <Text style={{
              fontSize: 10, textAlign: 'left', marginLeft: 8, color: '#004B46',
              fontWeight: '500'
            }}>
              Add New Address
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.submit}>
            <Text style={styles.submittext}>Continue</Text>
          </View>
        </TouchableOpacity>

      </View>




    </View>

  );
};

export default EditBusiness;

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    backgroundColor: "#F8F8F8",
  },
  menuButton: {
    marginTop: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
    paddingTop: 6
  },
  listContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',

  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#003D34'
  },
  container1: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    width: '67px',
    height: '67px',
    borderRadius: 33,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  cardcontainer: {
    backgroundColor: '#26C889',
    width: 17,
    height: 17,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '-18px',
    left: 40,
  },
  logotext: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: '-20px',
    lineHeight: 22,
    color: '#393939',
  },
  businessname: {
    color: '#909090',
    fontSize: 11,
    lineHeight: 22,
    fontWeight: 'normal',
  },
  inpubox: {
    backgroundColor: 'white',
    height: 46,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',

    justifyContent: 'center',
  },
  selectbusinesscontainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15
  },
  selectbusinesscard: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    //  alignItems: 'center',
    justifyContent: 'space-between'

  },
  cardstyle: {
    backgroundColor: 'white',
    width: '62px',
    height: 50,
    borderColor: '#004B46',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardheading: {
    color: '#3D3D3D',
    marginHorizontal: 3, marginTop: 5,
    fontSize: 10, fontWeight: '700', textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    width: '62px',
    height: 50,
    // borderColor: '#004B46',
    // borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputbox3: {
    backgroundColor: 'white',
    height: 46,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
  },
  inpuboxheading: {
    color: '#909090',
    fontSize: 11,
    lineHeight: 22,
    fontWeight: 'normal',
    marginTop: 15
  },
  addresscontainer: {
    backgroundColor: 'white', display: 'flex',
    flexDirection: 'column',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 8,
    // marginHorizontal:12,
  },
  Checkbox: {
    margin: 10, display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 12,
    alignItems: 'center'
  },
  add_address: {
    margin: 10, display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 12,
    alignItems: 'center'

  },
  submit: {
    height: 46,
    marginVertical: 18,
    backgroundColor: '#26C889',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submittext: {
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: 'bold',
  }
});
