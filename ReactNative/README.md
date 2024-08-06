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
* \<SafeAreaView> is an iOS component to render UI avoiding native elements, like statusbar, iphone notch, bat, and etc
* Some Styling are different for iOS and Android, for example:
	* For making View shadows, you use "elevation" for Android, and "shadow..." properties for iOS
	* You cannot style directly in the Text component passing borderRadius for example, iOS doesn't recognizes it, instead, do this styling inside the View component
* We can get the 'useFonts' hook by installing 'expo-font', and can use Google Fonts installing '@expo-google-fonts/[font]'
* useFonts receives an object as a parameter, where you put the font name "variable", and its path using require, for example: { 'open-sans': require('./assets/fonts/OpenSans-Regular.ttf') }
* You get a loading boolean from useFonts, and you can display a loading screen by installing 'expo-app-loading' and using <AppLoading>
* If you have 2 different components named: 'Button.ios.js' and 'Button.android.js', when importing from './Button', React Native will automatically pick up the file based on the running platform
* You can change orientation on app.js, to 'portrait' (fixed), 'landscape' (fixed), 'default' (dynamic)
* useWindowDimensions hook to get dynamically changed device's window and height by destructuring
* To get a basic press feedback on both android and ios we can use:
```js
	<Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [pressed && styles.buttonPressed,]}>
```