import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from '../screens/Home';
import HomeConnected from '../screens/HomeConnected';
import FakeHomeConnected from '../screens/FakeHomeConnected';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import PhoneVerification from '../screens/PhoneVerification';
import ConfirmationCode from '../screens/ConfirmationCode';
import ResetPassword from '../screens/ResetPassword';

import ResetPassword2 from '../screens/ResetPassword2';

// Profile pages
import Profile from '../screens/Profile/index';
import AccountSettings from '../screens/Profile/AccountSettings/index';
import PhoneNumber from '../screens/Profile/AccountSettings/PhoneNumber';
import ShippingAddress from '../screens/Profile/ShippingAddress/index';
import EditAddress from '../screens/Profile/ShippingAddress/EditAddress';
import PaymentMethod from '../screens/Profile/PaymentMethod/index';
import EditCard from '../screens/Profile/PaymentMethod/EditCard';
import NotificationsEmail from '../screens/Profile/NotificationsEmail/index';
import InsurancePolicy from '../screens/Profile/InsurancePolicy/index';
import CancellationPolicy from '../screens/Profile/CancellationPolicy/index';
import HowWeWork from '../screens/Profile/HowWeWork/index';
import ContactUs from '../screens/Profile/ContactUs/index';
import Promos from '../screens/Profile/Promos/index';
import About from '../screens/Profile/About/index';

// My Repairs pages
import Ring from '../screens/MyRepairs/Ring';

// New repair pages
import NewRepairs from '../screens/NewRepairs/index';
import Items from '../screens/NewRepairs/Items';

import Title1 from '../screens/NewRepairs/Items/Ring/Title1';
import Title2 from '../screens/NewRepairs/Items/Ring/Title2';
import Title3 from '../screens/NewRepairs/Items/Ring/Title3';
import Title4 from '../screens/NewRepairs/Items/Ring/Title4';
import Title5 from '../screens/NewRepairs/Items/Ring/Title5';
import Title6 from '../screens/NewRepairs/Items/Ring/Title6';
import Title7 from '../screens/NewRepairs/Items/Ring/Title7';
import Title8 from '../screens/NewRepairs/Items/Ring/Title8';
import Title9 from '../screens/NewRepairs/Items/Ring/Title9';

// Ring - Resize
import SecondStep from '../screens/NewRepairs/Items/Ring/Title1/SecondStep';
import ThirdStep from '../screens/NewRepairs/Items/Ring/Title1/ThirdStep';
import FourthStep from '../screens/NewRepairs/Items/Ring/Title1/FourthStep';
import FifthStep from '../screens/NewRepairs/Items/Ring/Title1/FifthStep';
import SixthStep from '../screens/NewRepairs/Items/Ring/Title1/SixthStep';
// Ring - Set Stone
import SecondStep2 from '../screens/NewRepairs/Items/Ring/Title2/SecondStep';
import ThirdStep2 from '../screens/NewRepairs/Items/Ring/Title2/ThirdStep';
import FourthStep2 from '../screens/NewRepairs/Items/Ring/Title2/FourthStep';
import FifthStep2 from '../screens/NewRepairs/Items/Ring/Title2/FifthStep';
import SixthStep2 from '../screens/NewRepairs/Items/Ring/Title2/SixthStep';
// Ring - Stone Related Repair
import SecondStep3 from '../screens/NewRepairs/Items/Ring/Title3/SecondStep';
import ThirdStep3 from '../screens/NewRepairs/Items/Ring/Title3/ThirdStep';
import FourthStep3 from '../screens/NewRepairs/Items/Ring/Title3/FourthStep';
import FifthStep3 from '../screens/NewRepairs/Items/Ring/Title3/FifthStep';
import SixthStep3 from '../screens/NewRepairs/Items/Ring/Title3/SixthStep';

// Ring - Engraving
import SecondStep4 from '../screens/NewRepairs/Items/Ring/Title4/SecondStep';
import ThirdStep4 from '../screens/NewRepairs/Items/Ring/Title4/ThirdStep';
import FourthStep4 from '../screens/NewRepairs/Items/Ring/Title4/FourthStep';
import FifthStep4 from '../screens/NewRepairs/Items/Ring/Title4/FifthStep';
import SixthStep4 from '../screens/NewRepairs/Items/Ring/Title4/SixthStep';

const Stack = createStackNavigator();

const MainNavigation = () => {
    const userData = useSelector((state) => state?.user?.userData);
    console.log("=userData=",userData);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={userData ? "HomeConnected" : "Home"}>
                {/* Home pages */}

                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
                <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="HomeConnected" component={HomeConnected} />
                <Stack.Screen name="FakeHomeConnected" component={FakeHomeConnected} />

                {/* Profile pages */}
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AccountSettings" component={AccountSettings} />
                <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
                <Stack.Screen name="EditAddress" component={EditAddress} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
                <Stack.Screen name="EditCard" component={EditCard} />
                <Stack.Screen name="NotificationsEmail" component={NotificationsEmail} />
                <Stack.Screen name="InsurancePolicy" component={InsurancePolicy} />
                <Stack.Screen name="CancellationPolicy" component={CancellationPolicy} />
                <Stack.Screen name="HowWeWork" component={HowWeWork} />
                <Stack.Screen name="ContactUs" component={ContactUs} />
                <Stack.Screen name="Promos" component={Promos} />
                <Stack.Screen name="About" component={About} />

                {/* Repair pages */}
                <Stack.Screen name="Ring" component={Ring} />

                {/* New repair pages */}
                <Stack.Screen name="NewRepairs" component={NewRepairs} />
                <Stack.Screen name="Items" component={Items} />

                {/* Ring - Resize */}
                <Stack.Screen name="Title1" component={Title1} />
                {/* Ring - Set Stone */}
                <Stack.Screen name="Title2" component={Title2} />
                {/*  */}
                <Stack.Screen name="Title3" component={Title3} />
                {/*  */}
                <Stack.Screen name="Title4" component={Title4} />
                {/*  */}
                <Stack.Screen name="Title5" component={Title5} />
                <Stack.Screen name="Title6" component={Title6} />
                <Stack.Screen name="Title7" component={Title7} />
                <Stack.Screen name="Title8" component={Title8} />
                <Stack.Screen name="Title9" component={Title9} />

                {/* Ring - Resize - Steps */}
                <Stack.Screen name="SecondStep" component={SecondStep} />
                <Stack.Screen name="ThirdStep" component={ThirdStep} />
                <Stack.Screen name="FourthStep" component={FourthStep} />
                <Stack.Screen name="FifthStep" component={FifthStep} />
                <Stack.Screen name="SixthStep" component={SixthStep} />

                {/* Ring - Set Stone - Steps */}
                <Stack.Screen name="SecondStep2" component={SecondStep2} />
                <Stack.Screen name="ThirdStep2" component={ThirdStep2} />
                <Stack.Screen name="FourthStep2" component={FourthStep2} />
                <Stack.Screen name="FifthStep2" component={FifthStep2} />
                <Stack.Screen name="SixthStep2" component={SixthStep2} />
            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    );
};

export default MainNavigation;