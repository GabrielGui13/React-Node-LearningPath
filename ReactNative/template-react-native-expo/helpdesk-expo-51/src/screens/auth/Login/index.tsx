import { Text } from "react-native";
import { LoginContainer, LoginText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const Login = () => {
  // const navigation = useNavigation()

  // useEffect(() => {
  //   navigation.navigate("Register")
  // }, [])
  
  return (
    <LoginContainer>
      <LoginText>Login Screen</LoginText>
    </LoginContainer>
  );
};
