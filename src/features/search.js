import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.green,
    },
});
