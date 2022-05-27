import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUser from './src/screens/CreateUser';
import UserDetails from './src/screens/UserDetails';
import UsersList from './src/screens/UsersList';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersList} options={{ title: 'Users List'}}></Stack.Screen>
      <Stack.Screen name="CreateUser" component={CreateUser}></Stack.Screen>
      <Stack.Screen name="UserDetails" component={UserDetails}></Stack.Screen>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
