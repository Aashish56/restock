import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedbackExample ,
  TouchableHighlight,
  ScrollView
} from "react-native";

const AccountType = ({ navigation }) => {
  const [value, setValue] = useState(1)

  const navigateToPage = (pageName) => {
    if (pageName === "next") {
      navigation.navigate("CreateBusiness");
    } else if (pageName === "back") {
      navigation.navigate("CreateBusiness");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        
        <Text style={styles.pageTitle}>Account Created</Text>
        <Text style={styles.pageDescription}>
          Your personal account has been created.
        </Text>
        <Text style={styles.pageDescription}>
          On Restock you can manage multiple businesses at once.
          But first you need to either create an business or need to get invited at once.
        </Text>

        <TouchableOpacity onPress={() => setValue(1)} style={[styles.card, { flexDirection: 'row' }]}>
          <View>
            <TouchableOpacity
              style={styles.radio}
              onPress={() => setValue(1)}
            >
              {value === 1 && <View style={styles.selected} />}
            </TouchableOpacity>
          </View>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.cardTitle}>I am a business owner</Text>
            <Text style={styles.cardDescription}>
              Yes, i want to carete my business profile on restock & I accept Restock Terms & Policy
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setValue(2)} style={[styles.card, { flexDirection: 'row' }]}>
          <View>
            <TouchableOpacity
              style={styles.radio}
              onPress={() => setValue(2)}
            >
              {value === 2 && <View style={styles.selected} />}
            </TouchableOpacity>
          </View>
          <View style={{ flexShrink: 1 }}>
            <Text style={styles.cardTitle}>I am a staff for a business</Text>
            <Text style={styles.cardDescription}>
              If you are here to as a staff member then you must have your joining code for the organisation.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.continueButton}
          onPress={() => navigateToPage("next")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default AccountType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#E5E5E5",
  },
  pageTitle: {
    marginTop: 16,
    color: "#000",
    fontSize: 24,
    fontWeight: '700',
  },
  pageDescription: {
    paddingVertical: 8,
    color: "#A6A6A6",
    fontSize: 17,
    lineHeight: 28,
  },
  actionsContainer: {
    // position: "fixed",
    bottom: 10,
    left: 10,
    width: "94%",
  },
  continueButton: {
    backgroundColor: "#26C889",
    height: 54,
    alignItems: "center",
    borderRadius: 12,
  },
  continueButtonText: {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginTop: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: '100px',
    borderRadius:10,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.4
  },
  cardTitle: {
    color: "#003D34",
    fontSize: 20,
    fontWeight: '700',
  },
  cardDescription: {
    paddingVertical: 8,
    color: "#A6A6A6",
    fontSize: 14,
    lineHeight: 28,
  },
  radio: {
    height: 25,
    width: 25,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: '#003D34',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 5
  },
  selected: {
    width: 24,
    height: 24,
    borderRadius: 55,
    backgroundColor: '#003D34',
  }
});
