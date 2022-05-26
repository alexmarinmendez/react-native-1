import { View, Text, Button } from 'react-native';
import Constants from 'expo-constants';

const OtraScreen = (props) => {
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
            <Text>Hola Mundo!!!</Text>
            <Button
                onPress={() => props.navigation.navigate("productos")}
                title="BasicScreen"
                color="#841584"
            />
        </View>
    );
}

export default OtraScreen;