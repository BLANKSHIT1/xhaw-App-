import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './AboutUS';
import CalculateFeesScreen from './CalculateFees';
import ContactScreen from './ContactUS';
import FAQScreen from './FAQ';
import HomeScreen from './Home';
import PaymentScreen from './Payment';
import SignUpScreen from './Signup';
import SignInScreen from './Singin';
import VenuesScreen from './Venues';
import type { RootStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Homepage" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="AboutUS" component={AboutScreen} />
        <Stack.Screen name="Overview" component={AboutScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="ContactUS" component={ContactScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="CalculateFees" component={CalculateFeesScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Venues" component={VenuesScreen} />
        <Stack.Screen name="Plans" component={VenuesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}