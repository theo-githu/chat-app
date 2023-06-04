
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDS5LQ97UTZhb_iQWLJF2HV_L9xm0EH1kU",
    authDomain: "chat-app-6b367.firebaseapp.com",
    projectId: "chat-app-6b367",
    storageBucket: "chat-app-6b367.appspot.com",
    messagingSenderId: "433608266795",
    appId: "1:433608266795:web:5324f7b5beb160560c866e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen
          name="Chat">
            {props => <Chat 
              db={db} 
              {...props} 
            />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;