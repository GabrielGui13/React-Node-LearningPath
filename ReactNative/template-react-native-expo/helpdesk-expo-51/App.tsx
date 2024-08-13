import { AuthContextProvider } from "./src/contexts/AuthContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/lib/apollo";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import { useFonts } from "expo-font";
import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [loaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (loaded) {
        setAppIsReady(true)
        onLayoutRootView()
      }

      try {
        await SplashScreen.preventAutoHideAsync()
      } catch (e) {
        // console.warn(e)
      } finally {
        setAppIsReady(true)
        onLayoutRootView()
      }
    }

    prepare()
  }, [loaded])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady, SplashScreen])

  useEffect(() => {
    onLayoutRootView()
  }, [appIsReady])

  if (!loaded || error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <StatusBar style="auto" />
        <AuthContextProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AuthContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
