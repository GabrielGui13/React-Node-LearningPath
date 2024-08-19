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
* We wrap \<Drawer> between \<GestureHandlerRootView> to get the animation
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
* A universal library that provides separate APIs for Audio and Video playback: expo-av
* A library that provides access to the local file system on the device: expo-file-system
* import { RFValue } from 'react-native-responsive-fontsize' to put on css
* To load google fonts (theme is used to set a theme to styled-components for example):
```js
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

const [fontsLoaded] = useFonts({
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
})

const theme = {
	colors: {},
  fonts: {
    regular: 'Roboto_400Regular',
    medium: 'Roboto_500Medium',
    bold: 'Roboto_700Bold',
  },
}
```
* After configuring fonts, declare them on plugins field found on app.json
```js
"plugins": [
  [
    "expo-font",
    {
      "fonts": ["node_modules/@expo-google-fonts/inter/Inter_900Black.ttf"]
    }
  ]
]
```
* Or if you are using custom fonts, you can configure them by:
```js
const [loaded, error] = useFonts({
  "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Light": require("./assets/fonts/Poppins-Light"),
  "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
})
```
* And declare them in app.json:
```js
  "expo": {
    "plugins": [
      [
        "expo-font",
        {
          "fonts": ["./assets/fonts/Poppins-Regular.ttf", "./assets/fonts/Poppins-Light"]
        }
      ]
    ]
  }
```
* To load a default theme to default components, you may create a "styled.d.ts":
```js
import 'styled-components'

import { colorsTheme } from './theme'

export type ThemeType = typeof colorsTheme

export declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
```
* And then, you wrap all your aplication between a <ThemeProvider theme={theme}>, and you can access by your styled custom components:
```js
export const CustomText = styled.Text`
	color: ${({ theme }) => theme.colors.primary}
`
```
* To check for local authentication types (faceid, biometric, facial, etc):
```js
import * as LocalAuthentication from 'expo-local-authentication'

async function verifvAvaiableAuthentication() {
  const compatible = await LocalAuthentication.hasHardwareAsync()
  console.log('compatible', compatible)

  if (!compatible) {
    localAuthenticate()
  }

  const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync()
  console.log('isBiometricEnrolled', isBiometricEnrolled)

  if (!isBiometricEnrolled) {
    localAuthenticate()
  }

  const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
  const parsedTypes = types.map(
    (type) => LocalAuthentication.AuthenticationType[type],
  )

  setLocalAuthenticationAvaialable(parsedTypes[0])

  console.log('parsed types', parsedTypes)
}
```
* Render SplashScreen when waiting for loading:
```js
import * as SplashScreen from 'expo-splash-screen'

useEffect(() => {
  onLayoutRootView()
}, [loading])

async function onLayoutRootView() {
  if (loading) {
    await SplashScreen.preventAutoHideAsync()
  }

  if (!loading) {
    await SplashScreen.hideAsync()
  }
}
```
* To close the keyboard when touching outside the input (wrap the screen):
```js
<TouchableWithoutFeedback onPress={(e) => Keyboard.dismiss()}>
  {children}
</TouchableWithoutFeedback>
```
* To create a password input:
```js
<TextInput secureTextEntry={true} />
```
* For beautiful handled modalize, use react-native-portalize to render anything on top of everything, and then react-native-modalize to the proper modalize component, dont forget to wrap the application with the <GestureHandlerRootView />
* You can forward a ref via a custom component to another component (needed when I created a custom Modalize component), it will get 2 parameters, the props, and the ref:
```js
export const ForgotPasswordModalize = forwardRef(({ ...props }: ForgotPasswordModalizeProps, ref) => { return ( <Modalize ref={ref}> ) }
```
* it may be obvious, but just reinforcing, wrap NavigationContainer between EVERYTHING, or EVERYWHERE you will use him, to prevent getting the same errors.
* Android modalize error troubleshooting: https://github.com/jeremybarbet/react-native-modalize/issues/451
* KeyboardAvoidingView natively DONT WORK with a child ScrollView, to handle that, use KeyboardAwareScrollView from react-native-keyboard-aware-scroll-view package