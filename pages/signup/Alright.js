import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
const Alright = () => {

  // const navigateToPage = (pageName) => {
  //   if (pageName === "next") {
  //     navigation.navigate("SelectABusiness");
  //   } else if (pageName === "login") {
  //     navigation.navigate("Login");
  //   }
  // };

  return (


    <View style={styles.container}>
      <ScrollView>
      <View style={styles.circleContainer}>
        <View style={styles.circleView}>
          <AntDesign name="check" size={83} color="#26C889" />
        </View>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.Alright}>Alright!</Text>
        <Text style={styles.title}>Your business profile has been created!</Text>
      </View>

      
        <Text style={styles.hadingdescription}>SOME THINGS TO KNOW :</Text>
      
        <View style={styles.description} >
          <View style={{backgroundColor:"white",width:5,height:5,borderRadius:2.5}}></View>
        <Text style={styles.descriptionText} >Your phone number 7017xxxxxxx is your business handle & can be use by anyone to find you on restock.You acn also share it with anyone to let them find you on restock easily</Text>
      

        </View>
        <View style={styles.description} >
          <View style={{backgroundColor:"white",width:5,height:5,borderRadius:2.5}}></View>
        <Text style={styles.descriptionText1}>You can modify the above details anytime from your acountes page</Text>

        </View>
       </ScrollView>
      <TouchableOpacity  onPress={() => navigateToPage("next")}>
        <View style={styles.button}><Text style={styles.buttonText}>TAKE ME TO MY BUSINESS</Text></View>
      </TouchableOpacity>

    </View>

  );
};

export default Alright;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26C889",
    height: "100%",
  },
  circleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  circleView: {
    backgroundColor: 'white',
    width: 166,
    height: 166,
    borderRadius: 83,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 8
  },
  Alright: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',

  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 18,
    marginRight: 18,
    flexDirection:'row'



  },
  hadingdescription: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'left',
    marginLeft: 20,
    paddingTop:30
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 6,
    marginTop:-5
  },
  descriptionText1: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 6,
    marginTop:-5
  },
  button: {
    backgroundColor: 'white',

    height: 46,
    borderRadius: 8,
    marginTop: 30,
    marginHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginHorizontal:12

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#26C889',
    fontSize: 11,
    fontWeight: 'bold',

  }
});
