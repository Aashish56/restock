import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView 
} from "react-native";


const slider = [
  {
    image: "",
    title: "Create your free business",
    description:
      "While working the app reminds you to smile, laugh, walk and talk with those who matters.",
  },
];

const Onboarding = ({ navigation }) => {
  const [activeSlider, setActiveSlider] = useState(0);

  const navigateToPage = (pageName) => {
    if (pageName === "signup") {
      navigation.navigate("CreateAccount");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.restock}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.pageTitle}>TRUSTED BY 1 LAKH+ BUSINESSES</Text>

        <View style={styles.slider}>
          {slider.map((slide, index) => {
            if (activeSlider === index) {
              return (
                <View style={styles.slide} key={index}>
                  <Image
                    style={styles.slideImage}
                    source={require("../assets/onboard-1.png")}
                  />

                  <Text style={styles.slideTitle}>{slide.title}</Text>
                  <Text style={styles.slideDescription}>
                    {slide.description}
                  </Text>
                </View>
              );
            }

            return null;
          })}
        </View>
      </View>
      </ScrollView>
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.signupButton}
          onPress={() => navigateToPage("signup")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => navigateToPage("login")}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  logo: {
    height: 39,
    width: 100,
    margin: "auto",
    marginTop: 40,
  },
  pageTitle: {
    marginTop: 16,
    paddingVertical: 8,
    color: "#003D34",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 17,
    // fontWeight: 800,
  },
  slider: {},
  slide: {
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  slideImage: {
    height: 190,
    width: 200,
    margin: "auto",
  },
  slideTitle: {
    marginTop: 20,
    paddingVertical: 8,
    color: "#003D34",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  slideDescription: {
    marginTop: 3,
    paddingVertical: 8,
    color: "#A6A6A6",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    lineHeight: 28,
  },
  actionsContainer: {
    // position: "fixed",
    bottom: 10,
    left: 10,
    width: "94%",
  },
  loginButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#26C889",
    marginBottom: 5,
    height: 54,
    alignItems: "center",
    borderRadius: 12,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#26C889",
    textTransform: "uppercase",
    fontSize: 17,
    // fontWeight: 700,
    letterSpacing: 0.6,
    marginTop: 14,
  },
  signupButton: {
    backgroundColor: "#26C889",
    marginBottom: 15,
    height: 54,
    alignItems: "center",
    borderRadius: 12,
  },
  signupButtonText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 17,
    // fontWeight: 700,
    // fontWeight: 700,
    letterSpacing: 0.6,
    marginTop: 16,
  },
  restock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20
  },
});