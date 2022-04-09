import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
} from "react-native";
import { Feather } from '@expo/vector-icons';
const CreateBusiness = ({ navigation }) => {
    const [value, setValue] = useState(1)
    const [businessName, setBusinessName] = useState('')

    const navigateToPage = (pageName) => {
        if (pageName === "next") {
            navigation.navigate("SelectBusiness");
        } else if (pageName === "back") {
            navigation.navigate("CreateBusiness");
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.pageTitle}>Create your business</Text>
                <Text style={styles.pageDescription}>
                    This is your business account to which your customers will place orders.
                    You can manage your business or order from other businesses as well.
                </Text>
                <Text style={styles.pageDescription}>
                    You can create multiple business but there needs to be atleast one business for each account.
                </Text>
                <Text style={styles.label}>Your Business Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setBusinessName(text)}
                    value={businessName}
                    placeholder=""
                    keyboardType="text"
                />
                <Text style={styles.label}>Select your primary business type</Text>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-evenly" }}>
                        <TouchableOpacity onPress={() => setValue(1)} style={[styles.card, value == 1 ? { flexDirection: 'column', borderColor: "#003D34", borderWidth: 2 } : { flexDirection: 'column' }]}>
                            <View style={styles.radioWrapper}>
                                <TouchableOpacity
                                    style={styles.radio}
                                    onPress={() => setValue(1)}
                                >
                                          
                                    {value === 1 && <View style={styles.selected} />}
                                </TouchableOpacity>
                                {/* <Feather name="edit" size={18} color="#004B46" style={{
                                                       marginLeft: 5,                                      
                                                       textAlign:'center',
                                                   }} /> */}
                            </View>
                            <View style={{ flexShrink: 1 }}>
                                <Text style={styles.cardTitle}>Manufacturer</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setValue(2)} style={[styles.card, value == 2 ? { flexDirection: 'column', borderColor: "#003D34", borderWidth: 2 } : { flexDirection: 'column' }]}>
                            <View style={styles.radioWrapper}>
                                <TouchableOpacity
                                    style={styles.radio}
                                    onPress={() => setValue(2)}
                                >
                                    {value === 2 && <View style={styles.selected} />}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexShrink: 1, justifyContent: "center" }}>
                                <Text style={styles.cardTitle}>Distributor/Wholesaler</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-evenly" }}>
                        <TouchableOpacity onPress={() => setValue(3)} style={[styles.card, value == 3 ? { flexDirection: 'column', borderColor: "#003D34", borderWidth: 2 } : { flexDirection: 'column' }]}>
                            <View style={styles.radioWrapper}>
                                <TouchableOpacity
                                    style={styles.radio}
                                    onPress={() => setValue(3)}
                                >
                                    {value === 3 && <View style={styles.selected} />}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexShrink: 1 }}>
                                <Text style={styles.cardTitle}>Retailer</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setValue(4)} style={[styles.card, value == 4 ? { flexDirection: 'column', borderColor: "#003D34", borderWidth: 2 } : { flexDirection: 'column' }]}>
                            <View style={styles.radioWrapper}>
                                <TouchableOpacity
                                    style={styles.radio}
                                    onPress={() => setValue(4)}
                                >
                                    {value === 4 && <View style={styles.selected} />}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexShrink: 1, justifyContent: "center" }}>
                                <Text style={styles.cardTitle}>Logisticcs</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.actionsContainer}>
                <TouchableHighlight
                    style={styles.continueButton}
                    onPress={() => navigateToPage("next")}
                >
                    <Text style={styles.continueButtonText}>Next</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default CreateBusiness;

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
        shadowOpacity: 0.4,
        marginHorizontal: 10
    },
    cardTitle: {
        color: "#003D34",
        fontSize: 13,
        fontWeight: '700',
        textAlign: 'center'
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
    },
    radioWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    label: {
        marginTop: 10,
        paddingVertical: 6,
        color: "#A6A6A6",
        fontSize: 14,
        lineHeight: 28,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff",
        borderColor: "#E2E2E2"
    },
});
