import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateRoomsScreen from './screens/CreateRoomsScreen';
import colors from './constants/Color';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="CreateRooms"
          component={CreateRoomsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Odalar',
            headerTitleAlign: 'center',
            headerTintColor: colors.secondary,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}