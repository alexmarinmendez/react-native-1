import { useEffect } from 'react';
import { Button, View, TextInput, ScrollView, StyleSheet } from "react-native";
import { useState  } from "react";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "users", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}

const UserDetails = (props) => {
    const [state, setState] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const deleteUser = async () => {
        await deleteDoc(doc(db, "users", props.route.params.userId));
        props.navigation.navigate('UsersList');
    }

    const updateUser = async () => {
        const itemRef = doc(db, "users", state.id);
        await updateDoc(itemRef, {
            name: state.name,
            email: state.email,
            phone: state.phone
        });
        props.navigation.navigate('UsersList');
    }

    useEffect(() => {
            firestoreFetchOne(props.route.params.userId)
                .then(result => setState(result))
                .catch(err => console.log(err))
    }, []);

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Name" value={state.name} onChangeText={value => handleChangeText('name', value)} />
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Email" value={state.email} onChangeText={value => handleChangeText('email', value)} />
        </View>
        <View style={styles.inputGroup}>
          <TextInput placeholder="Phone" value={state.phone} onChangeText={value => handleChangeText('phone', value)} />
        </View>
        <View>
          <Button color='#19AC52' title="Update User" onPress={() => updateUser()} />
        </View>
        <View>
          <Button color='#E37399' title="Delete User" onPress={() => deleteUser()} />
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

export default UserDetails;