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
const BusinessConnection = ({ navigation }) => {

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
                  style={{ marginLeft: 3 }} />
              </View>
            </View>
          </View>

        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{
          display: 'flex',
          flex: .6,
          height: '85',
          backgroundColor: "#F8F8F8",
        }}>
          <View style={styles.sharebusiness}>
            <View style={styles.menu}>
              <Foundation name="dollar-bill" size={30} color="black" />
              <FontAwesome5 name="users" size={24} color="black" style={{ marginTop: '-10px' }} />
              <Text style={styles.menutext}>Share Business</Text>
            </View>
            <View style={styles.menu}>
              <MaterialCommunityIcons name="qrcode-plus" size={34} color="black" style={{ marginTop: 8 }} />
              <Text style={styles.menutext1}>Share QR code</Text>
            </View>
            <View style={styles.menu}>
              <MaterialCommunityIcons name="qrcode-scan" size={34} color="black" style={{ marginTop: 8 }} />
              <Text style={styles.menutext1}>Scan QR Code</Text>
            </View>
          </View>

          <View style={styles.sales_purchase_container}>
            <View style={styles.sales_purchase}>
              <Text style={styles.sales_purchase_text}>Sales (Estimate)</Text>
              <Text style={styles.sales_purchase_price}>₹23,935</Text>
            </View>
            <View style={{ width: 2 }}>
              <View style={styles.linecontent}></View>
            </View>
            <View style={styles.sales_purchase}>
              <Text style={styles.sales_purchase_text}>Sales (Estimate)</Text>
              <Text style={styles.sales_purchase_price}>₹23,935</Text>
            </View>
          </View>


          <View style={styles.locumn}>
            <View style={styles.row}>
              <View style={styles.card}>
                <View style={styles.cardView}>
                  <View style={styles.cardicon}>
                    <AntDesign name="addfile" size={24} color="#777777" style={{ marginTop: 12, marginHorizontal: 15 }} />
                  </View>
                  <View style={styles.cardtitle}>
                    <Text style={{ color: '#777777', fontSize: 12, fontWeight: '600' }}>Products</Text>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>18</Text>
                  </View>
                </View>
                <View style={{ display: 'flex', flex: .3 }}>
                  <View style={styles.cardLine}></View>
                </View>
                <View style={{ marginHorizontal: 12 }}>
                  <View style={styles.cardLink1}>
                    <Text style={styles.linkText}>Add Product</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                  <View style={styles.cardLink2}>
                    <Text style={styles.linkText}>Add Collection</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardView}>
                  <View style={styles.cardicon}>
                    <AntDesign name="areachart" size={24} color="#777777" style={{ marginTop: 12, marginHorizontal: 15 }} />
                  </View>
                  <View style={styles.cardtitle}>
                    <Text style={{ color: '#777777', fontSize: 12, fontWeight: '600' }}>Products</Text>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>18</Text>
                  </View>
                </View>
                <View style={{ display: 'flex', flex: .3 }}>
                  <View style={styles.cardLine}></View>
                </View>
                <View style={{ marginHorizontal: 12 }}>
                  <View style={styles.cardLink1}>
                    <Text style={styles.linkText}>Add Product</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                  <View style={styles.cardLink2}>
                    <Text style={styles.linkText}>Add Collection</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.card}>
                <View style={styles.cardView}>
                  <View style={styles.cardicon}>

                    <AntDesign name="shoppingcart" size={24} color="#777777" style={{ marginTop: 12, marginHorizontal: 15 }} />
                  </View>
                  <View style={styles.cardtitle}>
                    <Text style={{ color: '#777777', fontSize: 12, fontWeight: '600' }}>Products</Text>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>18</Text>
                  </View>
                </View>
                <View style={{ display: 'flex', flex: .3 }}>
                  <View style={styles.cardLine}></View>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                  <View style={styles.cardLink1}>
                    <Text style={styles.linkText}>Add Product</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                  <View style={styles.cardLink2}>
                    <Text style={styles.linkText}>Add Collection</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardView}>
                  <View style={styles.cardicon}>
                    <Foundation name="graph-bar" size={24} color="#777777" style={{ marginTop: 12, marginHorizontal: 15 }} />
                  </View>
                  <View style={styles.cardtitle}>
                    <Text style={{ color: '#777777', fontSize: 12, fontWeight: '600' }}>Products</Text>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>18</Text>
                  </View>
                </View>
                <View style={{ display: 'flex', flex: .3 }}>
                  <View style={styles.cardLine}></View>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                  <View style={styles.cardLink1}>
                    <Text style={styles.linkText}>Add Product</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                  <View style={styles.cardLink2}>
                    <Text style={styles.linkText}>Add Collection</Text>
                    <AntDesign name="arrowright" size={15} color="#004B46" />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 12 }}>
            <View style={styles.extracontent}></View>
            <View style={styles.extracontent}></View>
            <View style={styles.extracontent}></View>
          </View>
        </ScrollView>
        <View style={styles.buttom}>
          <View style={styles.buttonmenu}>
            <Entypo name="home" size={24} color="#004B46" />
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#004B46' }}>Manage</Text>
          </View>
          <View style={styles.buttonmenu}>
            <FontAwesome5 name="shopping-bag" size={24} color="#949494" />
            <Text style={styles.buttomtext}>Connections</Text></View>
          <View style={styles.buttonmenu}>
            <FontAwesome5 name="inbox" size={24} color="#949494" />
            <Text style={styles.buttomtext}>Inbox</Text></View>
          <View style={styles.buttonmenu}>
            <Ionicons name="settings-sharp" size={24} color="#949494" />
            <Text style={styles.buttomtext}>More</Text></View>

        </View>

      </View>

    </>
  );
};

export default BusinessConnection;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F8F8F8",
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    justifyContent: 'space-between'

  },
  bodycon: {
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
  buttomtext: { fontSize: 12, fontWeight: 'bold', color: '#004B46' },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  headerView1: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF8FB2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardLine: {
    height: 1, width: 'auto', backgroundColor: 'whitesmoke',
    marginLeft: 4,
    marginRight: 4

  },
  extracontent: {
    height: '119px', borderColor: '#EEEEEE',
    borderWidth: 1, borderRadius: 10, backgroundColor: 'white', marginHorizontal: 3, marginVertical: 10
  },
  linecontent: { height: '60px', width: 1, backgroundColor: 'whitesmoke' },
  headertext1: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2
  },
  headerView2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  sales_purchase_text: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left'
  },
  headertext2: {
    color: '#003D34',
    fontSize: 15,
    fontWeight: '700'
  },
  headertext3: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 2,

  },
  headerView3: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 5

  },
  headerView4: {
    display: 'flex',
    width: '58px',
    height: 20,
    backgroundColor: '#26C889',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headertext4: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',

  },
  inputcontainer: {

  },
  buttom: {
    flex: .2,
    display: 'flex',
    height: '10%',
    // buttom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 12

  },
  buttonmenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sharebusiness: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '-10px'
  },
  menu: {
    width: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  menutext: { fontSize: 10, fontWeight: '600', textAlign: 'center', color: '#003D34' },
  menutext1: { fontSize: 10, fontWeight: '600', textAlign: 'center', marginTop: 8, color: '#003D34' },
  sales_purchase_container: {
    height: '70px',
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  sales_purchase: {
    display: 'flex',
    alignItems: 'center',


  },
  sales_purchase_price: {
    color: '#2AB930',
    fontSize: 17,
    fontWeight: '800'
  },
  locumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 12
  },
  card: {
    display: 'flex',
    flex: .5,
    backgroundColor: 'white',
    borderColor: 'whitesmoke',
    borderRadius: 12,
    borderWidth: 1,
    width: 'auto',
    height: '123px',
    marginHorizontal: 6,
    marginVertical: 6,
    flexDirection: 'column',
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 12
  },
  cardtitle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 12
  },
  cardLink1: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cardLink2: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 },
  linkText: {
    color: '#004B46',
    fontSize: 11,
    fontWeight: '600'
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
