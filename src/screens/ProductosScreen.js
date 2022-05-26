import { View, Button } from 'react-native';
import Videos from '../components/Videos';
import Constants from 'expo-constants';

const ProductosScreen = (props) => {
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
            <Videos />
            <Button
                onPress={() => props.navigation.navigate("basic")}
                title="BasicScreen"
                color="#841584"
            />
        </View>
    );
}

export default ProductosScreen;