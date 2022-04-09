import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    CheckBox
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
const BusinessConnetions = ({ navigation }) => {

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
                <View style={{ height: '90%' }}>
                    <View style={styles.header}>
                        <View style={styles.headerItem1}>
                            <FontAwesome name="navicon" size={24} color="black" />
                            <View style={styles.circle}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>DB</Text>
                            </View>
                            <Text style={{ color: '#003D34', fontSize: 15, fontWeight: '700', marginLeft: 10 }}>Black bag</Text>
                            <Text style={{ fontSize: 10, marginLeft: 5 }}>(owner)</Text>
                            <AntDesign name="caretdown" size={12} color="black" style={{ marginLeft: 4 }} />
                        </View>
                        <View style={styles.headerItem2}>
                            <View style={styles.active}>
                                <Text style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>Active</Text>
                                <View style={{ backgroundColor: 'white', height: 13, width: 13, borderRadius:50, marginLeft: 5 }}></View>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{ paddingBottom: '100px' }}>
                        <View style={styles.headingContainer}>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Select a Customer</Text>
                            <Text style={{ color: '#777777', fontSize: 12, fontWeight: '500', paddingTop: 8, textAlign: 'left' }}>All connections are only for the selected business only. Please change business for other connections.</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Feather name="search" size={20} color="black" />
                            <TextInput placeholder="Filter results.." style={styles.input} />

                            <View style={{ backgroundColor: '#004B46', width: '59px', height: 24, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 10, fontWeight: '500', letterSpacing: 2 }}>FILTER</Text>
                            </View>
                            <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" style={{ paddingHorizontal: 13 }} />
                        </View>
                        <View style={{ paddingBottom: '100px' }}>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12}}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <View style={styles.circle2}>
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>DE</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Dana Electronics</Text>
                                        <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Manufactorer - Electronics</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <FontAwesome5 name="phone-alt" size={20} color="black" />
                                    <AntDesign name="message1" size={20} color="black" style={{ paddingLeft: 18 }} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.buttomMenu}>
                    <View style={styles.menu}>
                        <Entypo name="home" size={24} color="#004B46" />
                        <Text style={styles.activeMenuText}>Home</Text>
                    </View>
                    <View style={styles.menu}>
                        <FontAwesome5 name="shopping-bag" size={24} color="#888888" />
                        <Text style={styles.menuText}>Contacts</Text>
                    </View>
                    <View style={styles.menu}>
                        <Feather name="shopping-cart" size={24} color="#888888" />
                        <Text style={styles.menuText}>Orders</Text>
                    </View>
                    <View style={styles.menu}>
                        <Ionicons name="settings-sharp" size={24} color="#888888" />
                        <Text style={styles.menuText}>Setting</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default BusinessConnetions;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F8F8F8",
        display: 'flex',
        flexDirection: 'column',


    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 25,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        paddingBottom: 10
    },
    headerItem1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8FB2',
        height: 36,
        width: 36,
        borderRadius:50,
        marginLeft: 18
    },
    headerItem2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10


    },
    active: {
        height: 20,
        width: '58px',
        backgroundColor: '#26C889',
        borderRadius:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headingContainer: {
        marginHorizontal: 12,
        paddingTop: 10
    },
    inputContainer: {
        display: 'flex',
        backgroundColor: 'white',
        marginHorizontal: 12,
        marginTop: 12,
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        borderRadius:8,
        marginBottom: 10

    },
    input: {
        display: 'flex',
        height: 46,
        width: '100%',
        marginLeft: 5,
   

    },

    circle2: {
        backgroundColor: '#004B46',
        height: 46,
        width: 46,
        borderRadius:50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    buttomMenu: {
        height: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '10%',
        paddingHorizontal: 12
    },
    menu: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
    menuText: { color: '#888888', fontSize: 12, fontWeight: '700' },
    activeMenuText: { fontSize: 12, fontWeight: '700', color: '#004B46' }
});
