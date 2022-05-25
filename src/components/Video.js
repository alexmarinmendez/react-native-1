import { View, Text, StyleSheet, Image } from "react-native";
import VideoDetails from './VideoDetails';
import StyledText from './StyledText';

const Video = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <StyledText bold big blue>{props.title}</StyledText>
            <StyledText big>Otro texto</StyledText>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: props.thumbnail }} style={styles.image}></Image>
                <Text style={{ paddingLeft: 10, flex: 1 }}>{props.description}</Text>
            </View>
            <VideoDetails {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontWeight: 'bold', color: 'blue' },
    container: { padding: 20 },
    image: { width: 120, height: 70 }
});

export default Video;