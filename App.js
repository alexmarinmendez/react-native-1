import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import image from './assets/veintiunomarz.png';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import *  as Sharing from 'expo-sharing';
import { Platform } from 'react-native';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Es necesario acceder a los archivos del dispositivo');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localuri: pickerResult.uri })
  }

  const openShareDialog = async () => {
    if (Platform.OS === 'web') {
      alert("Sharing no está disponible en este dispositivo.");
      return;
    }
    await Sharing.shareAsync(selectedImage.localuri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo Mobile! 👋</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image source={{ uri: selectedImage !== null ? selectedImage.localuri : 'https://picsum.photos/200/200' }} style={styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={openShareDialog}
      >
        <Text style={styles.buttonText}>Share Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#292929' },
  title: { fontSize: 30, color: 'white' },
  image: { width: 200, height: 200},
  button: { fontSize: 20, backgroundColor: 'blue', padding: 10, marginTop: 20},
  buttonText: { color: '#fff' }
});

export default App;
