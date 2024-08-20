import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CreateRoomsScreen from './screens/CreateRoomsScreen';
import ChatRoomScreen from './screens/ChatRoomScreen/ChatRoomScreen';
import colors from './constants/Color';
import Entypo from '@expo/vector-icons/Entypo';
import app from './firebaseConfig'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: colors.secondary,
        headerShadowVisible: false,
      }}>
        <Stack.Screen
          name="CreateRooms"
          component={CreateRoomsScreen}
          options={{
            headerTitle: 'Odalar',
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{
            headerRight: () => {
              return (
                <Entypo
                  name="log-out"
                  size={24}
                  color={colors.secondary}
                />)
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}