import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Videos recomendados</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: { color: 'white', fontWeight: 'bold', fontSize: 20 }
});

export default AppBar;