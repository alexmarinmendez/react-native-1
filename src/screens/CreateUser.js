import { Button, View, TextInput, ScrollView, StyleSheet } from "react-native";
import { useState  } from "react";
import db from '../utils/firebaseConfig';
import { collection, doc, setDoc } from "firebase/firestore";

const CreateUser = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const saveUser = async () => {
      if (state.name === "") {
        alert('Please provide a valid name');
      } else {
          // Add a new document with a generated id
          const newUserRef = doc(collection(db, "users"));
          await setDoc(newUserRef, state);
          // alert('It works');
          props.navigation.navigate('UsersList');
      }
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Name" onChangeText={value => handleChangeText('name', value)} />
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Email" onChangeText={value => handleChangeText('email', value)} />
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Phone" onChangeText={value => handleChangeText('phone', value)} />
        </View>
        <View>
          <Button title="Save User" onPress={saveUser} />
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    }
});

export default CreateUser;