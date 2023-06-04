import { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, onSnapshot } from "firebase/firestore";


const Chat = ({ db, route, navigation }) => {
    const { name, color, userID } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({ title: name });

        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        unsubMessages = onSnapshot(q, (docs) => {
          let newMessages = [];
          docs.forEach((doc) => {
            newMessages.push({
              id: doc.id,
              ...doc.data(),
              createdAt: new Date(doc.data().createdAt.toMillis()),
            });
          });
          setMessages(newMessages);
        });
      

      return () => {
        if (unsubMessages) unsubMessages();
      };
    }, []);

    const onSend = (newMessages) => {
      addDoc(collection(db, 'messages'), newMessages[0])
    }

    const renderBubble = (props) => {
        return <Bubble
        {...props}
        wrapperStyle={{
            right: {
            backgroundColor: "#000"
            },
            left: {
            backgroundColor: "#FFF"
            }
        }}
        />
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                _id: userID,
                name: name,
                }}
            />
            { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
            {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
        </View>
    );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});

export default Chat;