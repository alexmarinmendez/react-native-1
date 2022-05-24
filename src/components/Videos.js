import { FlatList, Text } from "react-native";
import data from '../utils/data';
import Video from './Video';

const Videos = () => {
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item}) => (
                <Video {...item} />
            )}
        />
    );
}

export default Videos;