import { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    TextInput, 
    ImageBackground, 
    KeyboardAvoidingView,
    TouchableOpacity  
} from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";


const Start = ({ navigation }) => {
    const [test, setText] = useState('');
    const [color, setColor] = useState('');
    const auth = getAuth();

    const bgColors = {
        black: { backgroundColor: '#090C08'},
        purple: { backgroundColor: '#474056'},
        blue: { backgroundColor: '#8A95A5'},
        mint: { backgroundColor: '#B9C6AE'}
    };

    const { black, blue, purple, mint } = bgColors;

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
            <View style={styles.Container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Chat-App!</Text>
                </View>
          
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setText}
                        placeholder='Enter username'
                    />    

                    <View style={styles.colorSelect}>
                    <Text style={styles.colorText}>Choose your background colour</Text>
                        <View style={styles.colorWrapperContainer}>
                            <TouchableOpacity
                            style={[styles.color, black]}
                            onPress={() => setColor('#090C08')}
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
                        <Text>  
                            Start Chatting
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {Platform.OS === "ios" ? (
                <KeyboardAvoidingView behavior='padding' />
            ) : null}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '88%',
    },
    title: {
        color: '#fff',
        fontSize: 45,
        fontWeight: '600',
        flex: 2,
        marginTop: 20,
    },
    inputBox: {
        height: '44%',
        width: '88%',
        minHeight: 200,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: '88%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 2,
        color: '#757083',
        opacity: 50,
        fontSize: 16,
        fontWeight: '300',
        paddingLeft: 20,
    },
    colorSelect: {
        height:75,
        flex: 3,
    },
    colorText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        opacity: 100,
        flex: 8,
        marginTop: 20
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
    button: {
        backgroundColor: '#757083',
        alignItems: 'center',
        width: '88%',
        padding: 10,
        flex: 6,
        marginTop:20,
    },
});
   
export default Start;


                

               