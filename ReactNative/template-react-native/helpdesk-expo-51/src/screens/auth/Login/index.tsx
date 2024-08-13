import { Image } from "react-native";
import { LoginContainer, LoginText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { PrimaryButton } from "../../../components/ui/PrimaryButton";
import { Input } from "../../../components/ui/Input";
import { DismissKeyboard } from "../../../components/ui/DismissKeyboard";

export const Login = () => {
  // const navigation = useNavigation()

  // useEffect(() => {
  //   navigation.navigate("Register")
  // }, [])

  return (
    <DismissKeyboard>
      <LoginContainer>
        <Image style={{ height: 50, width: 50 }} source={require('../../../assets/image/interas-icon-blue.png')} />
        {/* <LoginText>Login Screen</LoginText> */}
        <Input secureTextEntry={true} label="Senha" placeholder="Insira sua senha" />
        <PrimaryButton style={{ marginTop: 10 }}>Teste</PrimaryButton>
      </LoginContainer>
    </DismissKeyboard>
  );
};
