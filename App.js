import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "./pages/signup/create-account";
import OTP from "./pages/signup/otp";
import CreateBusiness from "./pages/signup/create-business";
import Login from "./pages/signin/login";
import Forgot from "./pages/signin/forgot";
import { Provider as AuthProvider } from './context/AuthContext.js';
import { Context as AuthContext } from './context/AuthContext';
import { useContext } from "react";
import Onboarding from "./pages/Onboarding";
import Alright from "./pages/signup/Alright";
import SelectBusiness from "./pages/signup/Select-Business";
import NewPassword from "./pages/signin/NewPassword";
import OtpResetPassword from "./pages/signin/OtpResetPassword";
import ResetPassword from "./pages/signin/ResetPassword";
import EditBusiness from "./pages/Business-Profile/Edit-business";
import SelectABusiness from "./pages/Business-Profile/SelectABusiness";
import Profile from "./pages/signup/Profile";
import EditProfile from "./pages/signup/Edit-profile";
import Addresse from "./pages/signup/Addresse";
import BusinessConnection from "./pages/manageBusiness/Business-connection";
import Addconnection from "./pages/manageBusiness/Addconnection";
import SearchHandle from "./pages/manageBusiness/SearchHandle";
import ParchaseOder from "./pages/oders/ParchaseOder";
import OderDetail from "./pages/oders/OderDetails";
import CreateOder from "./pages/oders/CreateOder";
import SelectOrder from "./pages/oders/SelectOder";
import SelectCustomer from "./pages/oders/SelectCustomer";
import BusinessConnetions from "./pages/connections/BusinessConnections";
import Shop from "./pages/connections/Shop";
import Parchase from "./pages/connections/Parchase";
import Chat from "./pages/connections/Chat";
import Inbox from "./pages/connections/Inbox";
import ProductsListing from "./pages/connections/ProductsListing";
import ProductDetail from "./pages/connections/ProductDetail";
import CardSummary from "./pages/connections/CardSummary";
import AccountType from "./pages/signup/account-type";
const AuthStack = createNativeStackNavigator();
function authFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
      
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SelectABusiness"
        component={SelectABusiness}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="OTP"
        component={OTP}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="AccountType"
        component={AccountType}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateBusiness"
        component={CreateBusiness}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="OtpResetPassword"
        component={OtpResetPassword}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Alright"
        component={Alright}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SelectBusiness"
        component={SelectBusiness}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="EditBusiness"
        component={EditBusiness}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Addresse"
        component={Addresse}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="BusinessConnection"
        component={BusinessConnection}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Addconnection"
        component={Addconnection}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SearchHandle"
        component={SearchHandle}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ParchaseOder"
        component={ParchaseOder}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="OderDetail"
        component={OderDetail}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateOder"
        component={CreateOder}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SelectOrder"
        component={SelectOrder}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SelectCustomer"
        component={SelectCustomer}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="BusinessConnetions"
        component={BusinessConnetions}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Parchase"
        component={Parchase}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ProductsListing"
        component={ProductsListing}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CardSummary"
        component={CardSummary}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={authFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Onboarding}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
