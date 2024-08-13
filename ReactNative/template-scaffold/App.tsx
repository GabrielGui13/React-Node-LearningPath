import { AuthContextProvider } from "./src/contexts/AuthContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./src/lib/apollo";
import { Routes } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";

export default function App() {
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
