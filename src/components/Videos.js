import { FlatList, Text } from "react-native";
import Video from './Video';
import { useState, useEffect } from 'react';

const Videos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=squidgame')
                .then(res => res.json())
                .then(result => setData(result.results))
                .catch(err => console.log(err));
    }, []);

    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item}) => (
                // <Video {...item} />
                <Text>{item.title}</Text>
            )}
        />
    );
}

export default Videos;