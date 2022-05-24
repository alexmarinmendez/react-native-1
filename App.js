import Videos from './src/components/Videos';
import Constants from 'expo-constants';
import { View } from 'react-native';
import AppBar from './src/components/AppBar';

const App = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <AppBar />
      <Videos />
    </View>
  );
};

export default App;
