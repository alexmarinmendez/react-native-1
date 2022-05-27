import { Button } from 'react-native';
import db from '../utils/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const firestoreFetch = async () => {
    const querySnapshot = await getDocs(query(collection(db, "users")));
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

const UsersList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        firestoreFetch()
            .then(result => setUsers(result))
            .catch(err => console.log(err));
    }, []);

    return (
        <ScrollView>
            {
                users.map(item => 
                    <ListItem 
                        key={item.id}
                        bottomDivider
                        onPress={() => {
                            props.navigation.navigate("UserDetails", {
                              userId: item.id,
                            });
                        }}
                    >
                        <Avatar 
                            source={{ uri: 'https://picsum.photos/200?random=' + item.id }}
                            rounded
                        />
                        <ListItem.Chevron />
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            }
            <Button 
                title="Create User" 
                onPress={() => props.navigation.navigate('CreateUser')} />
        </ScrollView>
    );
}

export default UsersList;