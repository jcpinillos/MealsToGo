import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const List = () => {
    return (
        <View style={styles.container}>
            <Text>List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue,
    },
});
