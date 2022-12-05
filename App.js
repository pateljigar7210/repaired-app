import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import HomeConnected from './screens/HomeConnected';
import FakeHomeConnected from './screens/FakeHomeConnected';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import PhoneVerification from './screens/PhoneVerification';
import ConfirmationCode from './screens/ConfirmationCode';
import ResetPassword from './screens/ResetPassword';
import ResetPassword2 from './screens/ResetPassword2';

// Profile pages
import Profile from './screens/Profile/index';
import AccountSettings from './screens/Profile/AccountSettings/index';
import PhoneNumber from './screens/Profile/AccountSettings/PhoneNumber';
import ShippingAddress from './screens/Profile/ShippingAddress/index';
import EditAddress from './screens/Profile/ShippingAddress/EditAddress';
import PaymentMethod from './screens/Profile/PaymentMethod/index';
import EditCard from './screens/Profile/PaymentMethod/EditCard';
import NotificationsEmail from './screens/Profile/NotificationsEmail/index';
import InsurancePolicy from './screens/Profile/InsurancePolicy/index';
import CancellationPolicy from './screens/Profile/CancellationPolicy/index';
import HowWeWork from './screens/Profile/HowWeWork/index';
import ContactUs from './screens/Profile/ContactUs/index';
import Promos from './screens/Profile/Promos/index';
import About from './screens/Profile/About/index';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    HelveticaNeueBold: require('./assets/fonts/HelveticaNeueBold.ttf'),
    HelveticaNeueLight: require('./assets/fonts/HelveticaNeueLight.ttf'),
    HelveticaNeueMedium: require('./assets/fonts/HelveticaNeueMedium.ttf'),
    HelveticaNeueItalic: require('./assets/fonts/HelveticaNeueItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeConnected" component={HomeConnected} />
        <Stack.Screen name="FakeHomeConnected" component={FakeHomeConnected} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ResetPassword2" component={ResetPassword2} />

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}