import { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    ImageBackground, 
    KeyboardAvoidingView,
    TouchableOpacity  
} from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
    const [text, setText] = useState('');
    const [color, setColor] = useState('');
    const auth = getAuth();

    const backgroundColors = {
        pink: { backgroundColor: '#090C08'},
        purple: { backgroundColor: '#474056'},
        blue: { backgroundColor: '#8A95A5;'},
        mint: { backgroundColor: '#B9C6AE'}
    };
    
    const { pink, purple, blue, mint} = backgroundColors;

    // Function to sign in the user anonymously
    const signInUser = () => {
        signInAnonymously(auth)
          .then(result => {
            navigation.navigate('Chat', {
                userID: result.user.uid,
                name: text ? text : 'User',
                color: color ? color : 'white', 
            });
            Alert.alert('Signed in Successfully!');
          })
          .catch((error) => {
            Alert.alert('Unable to sign in, try later again.');
          })
    }

    return (
        <ImageBackground
            source={require('../assets/Background-Image.png')}
            resizeMode='cover'
            style={(styles.image)}
        >    
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chat App</Text>
                </View>
                

                <View style={styles.subContainer}>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={setText}
                            placeholder='Your name'
                        />    

                        <View style={styles.colorSelect}>
                        <Text style={styles.colorText}>Choose your background colour:</Text>
                            <View style={styles.colorWrapperContainer}>
                                <TouchableOpacity
                                style={[styles.color, pink]}
                                onPress={() => setColor('#090C08;')}
                                />

                                <TouchableOpacity
                                style={[styles.color, purple]}
                                onPress={() => setColor('#474056')}
                                />

                                <TouchableOpacity
                                style={[styles.color, blue]}
                                onPress={() => setColor('#8A95A5')}
                                />

                                <TouchableOpacity
                                style={[styles.color, mint]}
                                onPress={() => setColor('#B9C6AE')}
                                />
                            </View>
                        </View>
                    
                        <TouchableOpacity style={styles.button} onPress={signInUser}>
                            <Text style={styles.buttonText}>  
                                Start Chatting
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
            {Platform.OS === "ios" ? (
                <KeyboardAvoidingView behavior='padding' />
            ) : null}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '88%',
        height: '44%',
        backgroundColor: 'white',
    },
    title: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: '600',
    },
    inputBox: {
        width: '88%',
        alignItems: 'center',
    },
    textInput: {
        width: '88%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 2,
        color: '#757083',
        opacity: 50,
        fontSize: 16,
        fontWeight: '300',
        padding: 10,
        paddingLeft: 20,
    },
    colorSelect: {
        height: 75,
        width: '88%',
        marginTop: 25,
    },
    colorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        opacity: 100,
    },
    colorWrapperContainer: {
        flexDirection: 'row',
    },
    color: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10
    },
    colorSelected: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#5f5f5f',
    },
    button: {
        backgroundColor: '#757083',
        alignItems: 'center',
        width: '88%',
        padding: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 600,
        fontSize: 16,
    },
});
   
export default Start;


                

               