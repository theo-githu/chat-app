import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = ({ route, navigation }) => {
    const { name } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);

    return (
        // { backgroundColor: color }
        <View style={styles.container}>
            <Text>Let's get chatting</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default Chat;