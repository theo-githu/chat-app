# chat-app

# React Native Chat App built using Expo development platform and Google Firebase and Firestore
------------------------------------------------------------------------------------------------
# Tools and Platforms 

- React Native - front end framework
- Expo - native app development platform
- Android Studio - mobile development environemnt with Emulator
- Google Firebase - non-relational database for storing messages. 
- Google Firestore - storage solution for media based chat messages. 

User Stories:

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

Key Features: 

- A page where users can enter their name and choose a background color for the chat screen before joining the chat .
- A page displaying the conversation, as well as an input field and submit button.
- The app leverages firebase's anonymous sign in feature to generate and record user ID/ message authors.
- Utilizes React Navigation to switch between two views, Start screen and a Chat screen.
- Data gets stored online and offline.

EXPO 
- Install Expo CLI as a global npm package: yarn add global expo-cli
- Create an account and log in at https://expo.dev/.
- Follow expo CLI's instructions.
- Install the Expo Go app on your phone (for testing purposes)
- Start the project: npx expo start 
- Scan the QR code provided in your terminal

FIREBASE/ FIRESTORE
- follow new project workflow within Firebase console
- include Firebase object within App.js and/or separate file. 
- make a reference to the project using firebase config obj. 
