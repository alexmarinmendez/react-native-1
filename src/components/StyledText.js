import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: { fontSize: 12, color: 'grey', fontFamily: 'serif' },
    bold: { fontWeight: 'bold' },
    blue: { color: 'blue' },
    big: { fontSize: 20 },
    small: { fontSize: 10 }
});

const StyledText = ({bold, blue, big, small, children}) => {
    const textStyles = [
        styles.text,
        bold && styles.bold,
        blue && styles.blue,
        big && styles.big,
        small & styles.small
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    );
}

export default StyledText;