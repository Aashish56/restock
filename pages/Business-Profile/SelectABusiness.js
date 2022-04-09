import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const SelectABusiness = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    if (pageName === "edit") {
      navigation.navigate("EditBusiness");
    } else if (pageName === "login") {
      navigation.navigate("Login");
    }
  };

  return (


    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <View style={styles.menuButton}>
            <SimpleLineIcons name="menu" size={18} color="#003D34" />
            <Text style={{ fontSize:14, fontWeight: 'bold', marginLeft: 15, color: '#003D34' }}>Select a business</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.description}>
          <Text style={{ fontSize:9, color: '#A6A6A6' }}>These are all your business which you’ve created or got an invitation to manage.</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={{
            display: 'flex',
            flexDirection: 'row', alignItems: 'center', marginTop: 6,
            flex: 1,
            justifyContent: 'center',

          }}>
            <View style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'flex-end',
              flex: .20,
            }}>
              <View style={{
                backgroundColor: '#FF8FB2',
                height: 40, width: 40,
                borderRadius: 20,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textAlign: 'center'
                }}>DE</Text>
              </View></View>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: .46,
            }}>
              <Text style={{
                marginLeft: 4,
                textAlign: 'left',
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black'
              }}>Dana's bedsheets</Text>
              <Text style={{
                color: '#A6A6A6',
                fontSize: 8,
                textAlign: 'left',
                marginLeft: 4,
              }}>Owner</Text>
            </View>
            <View style={{
              display: 'flex', flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: .33
            }}>
              <TouchableOpacity onPress={() => navigateToPage('edit')}>
                <Feather name="edit" size={18} color="#004B46" style={{
                  marginLeft: 5,
                  textAlign: 'center',
                }} />
              </TouchableOpacity>
              <MaterialIcons name="delete-outline" size={24} color="#FE2550"
                style={{ marginLeft: 8 }} />
            </View>
          </View>


          <View style={{
            display: 'flex',
            flexDirection: 'row', alignItems: 'center', marginTop: 6,
            flex: 1,
            justifyContent: 'center',

          }}>
            <View style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'flex-end',
              flex: .20,
            }}>
              <View style={{
                backgroundColor: '#FF8FB2',
                height: 40, width: 40,
                borderRadius: 20,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textAlign: 'center'
                }}>DE</Text>
              </View></View>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: .46,
            }}>
              <Text style={{
                marginLeft: 4,
                textAlign: 'left',
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black'
              }}>Dana's bedsheets</Text>
              <Text style={{
                color: '#A6A6A6',
                fontSize: 8,
                textAlign: 'left',
                marginLeft: 4,
              }}>Owner</Text>
            </View>
            <View style={{
              display: 'flex', flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: .33
            }}>
              <Feather name="edit" size={18} color="#004B46" style={{
                marginLeft: 5,

                textAlign: 'center',
              }} />
              <MaterialIcons name="delete-outline" size={24} color="#FE2550"
                style={{ marginLeft: 8 }} />
            </View>
          </View>



          <View style={{
            display: 'flex',
            flexDirection: 'row', alignItems: 'center', marginTop: 6,
            flex: 1,
            justifyContent: 'center',

          }}>
            <View style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'flex-end',
              flex: .20,
            }}>
              <View style={{
                backgroundColor: '#FF8FB2',
                height: 40, width: 40,
                borderRadius: 20,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textAlign: 'center'
                }}>DE</Text>
              </View></View>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: .46,
            }}>
              <Text style={{
                marginLeft: 4,
                textAlign: 'left',
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black'
              }}>Dana's bedsheets</Text>
              <Text style={{
                color: '#A6A6A6',
                fontSize: 8,
                textAlign: 'left',
                marginLeft: 4,
              }}>Owner</Text>
            </View>
            <View style={{
              display: 'flex', flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: .33
            }}>
              <Feather name="edit" size={18} color="#004B46" style={{
                marginLeft: 5,

                textAlign: 'center',
              }} />
              <MaterialIcons name="delete-outline" size={24} color="#FE2550"
                style={{ marginLeft: 8 }} />
            </View>
          </View>




          <View style={{
            display: 'flex',
            flexDirection: 'row', alignItems: 'center', marginTop: 6,
            flex: 1,
            justifyContent: 'center',

          }}>
            <View style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'flex-end',
              flex: .20,
            }}>
              <View style={{
                backgroundColor: '#FF8FB2',
                height: 40, width: 40,
                borderRadius: 20,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textAlign: 'center'
                }}>DE</Text>
              </View></View>
            <View style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              flex: .46,
            }}>
              <Text style={{
                marginLeft: 4,
                textAlign: 'left',
                fontSize: 10,
                fontWeight: 'bold',
                color: 'black'
              }}>Dana's bedsheets</Text>
              <Text style={{
                color: '#A6A6A6',
                fontSize: 8,
                textAlign: 'left',
                marginLeft: 4,
              }}>Owner</Text>
            </View>
            <View style={{
              display: 'flex', flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: .33
            }}>
              <Feather name="edit" size={18} color="#004B46" style={{
                marginLeft: 5,

                textAlign: 'center',
              }} />
              <MaterialIcons name="delete-outline" size={24} color="#FE2550"
                style={{ marginLeft: 8 }} />
            </View>
          </View>

        </View>
      </View>
      <View style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end', marginTop: 10,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        paddingBottom: 8
      }}>
        <AntDesign name="pluscircleo" size={16} color="#26C889" />
        <Text style={{ color: '#26C889', fontSize: 12, marginLeft: 3, textAlign: 'center', fontWeight: '500' }}>Create new business</Text>
      </View>

    </View>

  );
};

export default SelectABusiness;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    height: "100%",
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
});
