import BasicScreen from './src/screens/BasicScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductosScreen from './src/screens/ProductosScreen';
import OtraScreen from './src/screens/OtraScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="productos" component={ProductosScreen} options={{ title: "Lista de Productos" }}/>
//       <Stack.Screen name="basic" component={BasicScreen} options={{ title: "Nuestra primera Screen" }}/>
//       <Stack.Screen name="screen3" component={OtraScreen} options={{ title: "Otra Screen" }}/>
//     </Stack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="productos" component={ProductosScreen} />
      <Tab.Screen name="basic" component={BasicScreen} />
      <Tab.Screen name="screen3" component={OtraScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
