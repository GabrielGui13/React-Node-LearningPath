## Nice to remember

* Android builds to appbundle to publish
* iOS builds to .IPA
* Push notifications are done using Firebase for Android, and APNs for iOS
* When publishing, we need to create a project on Firebase and get a token to push notifications to Android devices
* Some components other than the Core, can be imported by expo or react-native specific packages
* \<StatusBar> imported by "expo-status-bar" is better
* The AsyncStorage (mobile localStorage) is imported by "@react-native-async-storage/async-storage"
* To get a nice expo Drawer we use:
```sh
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```
* We wrap \<Drawer> between \<GestureHandlerRootView> to get the  animation
* We use \<LinearGradient> from "expo-linear-gradient" to get a gradient background
* We use \<ImageBackground> to render a background image