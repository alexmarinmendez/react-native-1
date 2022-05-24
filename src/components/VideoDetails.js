import { View, Text, StyleSheet } from "react-native";

const VideoDetails = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <Text style={styles.title}>Fecha de subida:</Text>
                <Text>{props.dateAdded}</Text>
            </View>
            <View>
                <Text style={styles.title}>Canal:</Text>
                <Text>{props.channel}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', textAlign: 'center' }
});

export default VideoDetails;