import { Image, View } from "react-native";
import {
  LoginContainer,
  LoginFormInputWrapper,
  LoginFormWrapper,
  LoginNestedTextWrapper,
  LoginRegisterLinkWrapper,
  LoginTextWrapper,
} from "./styles";
import { PrimaryButton } from "../../../components/ui/PrimaryButton";
import { Input } from "../../../components/ui/Input";
import { DismissKeyboard } from "../../../components/helpers/DismissKeyboard";
import { useLanguage } from "../../../hooks/useLanguage";
import { BaseText } from "../../../components/ui/BaseText";
import { SafeAreaViewContainer } from "../../../components/helpers/SafeAreaViewContainer";
import { useTheme } from "styled-components";
import { LinkText } from "../../../components/ui/LinkText";
import { useRouter } from "../../../hooks/useRouter";
import { createRef, forwardRef, useRef, useState } from "react";
import { Portal } from "react-native-portalize";
import { Modalize, useModalize } from "react-native-modalize";
import { ForgotPasswordModalize } from "../../../components/auth/ForgotPasswordModalize";
import { ForgotPasswordModalizeContainer } from "../../../components/auth/ForgotPasswordModalize/styles";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { textData } = useLanguage();
  const theme = useTheme();

  const { routesNames } = useRouter()

  const { ref: forgotPasswordModalRef, open, close } = useModalize()
  // const forgotPasswordModalRef = createRef<Modalize>()

  const onOpenForgotPasswordModal = () => open()

  return (
    <SafeAreaViewContainer>
      <DismissKeyboard>
        <LoginContainer>
          <LoginTextWrapper>
            <Image
              style={{ height: 60, width: 60 }}
              source={require("../../../assets/image/interas-icon-blue.png")}
            />
            <BaseText size={"md"} align="center">
              {textData.loginScreen.welcome}
            </BaseText>
          </LoginTextWrapper>
          <LoginFormWrapper>
            <LoginFormInputWrapper>
              <Input
                size={"full"}
                label={textData.loginScreen.loginForm.email}
                placeholder={textData.loginScreen.loginForm.emailPlaceholder}
                keyboardType="email-address"
              />
              <Input
                size={"full"}
                showPassword={showPassword}
                onShowPassword={() => setShowPassword(!showPassword)}
                label={textData.loginScreen.loginForm.password}
                placeholder={textData.loginScreen.loginForm.passwordPlaceholder}
              />
              <LinkText
                full
                size={"xs"}
                align="right"
                color={theme.colors.text_primary  }
                weight="bold"
                onPress={onOpenForgotPasswordModal}
              >
                {textData.loginScreen.forgotPassword}
              </LinkText>
            </LoginFormInputWrapper>
            <PrimaryButton size="full">Entrar</PrimaryButton>
          </LoginFormWrapper>
          <LoginRegisterLinkWrapper>
            <LoginNestedTextWrapper>
              <BaseText size={"xs"} align="center" color={theme.colors.text}>
                {textData.loginScreen.registerLink.text}
              </BaseText>
              <LinkText
                size={"xs"}
                align="center"
                color={theme.colors.text_primary_light}
                weight="bold"
                to={routesNames.auth.Register}
              >
                {textData.loginScreen.registerLink.link}
              </LinkText>
            </LoginNestedTextWrapper>
            <View style={{ gap: 10 }}>
              <LoginNestedTextWrapper>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../../../assets/image/email-security.png")}
                />
                <LinkText size="xs" to={routesNames.auth.InviteCode}>{textData.loginScreen.loginWithInviteCode}</LinkText>
              </LoginNestedTextWrapper>
              <LoginNestedTextWrapper>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../../../assets/image/shield-check.png")}
                />
                <LinkText size="xs" to={routesNames.auth.CodeGenerator}>{textData.loginScreen.generateAccessCode}</LinkText>
              </LoginNestedTextWrapper>
            </View>
          </LoginRegisterLinkWrapper>

          <ForgotPasswordModalize ref={forgotPasswordModalRef} />

        </LoginContainer>
      </DismissKeyboard>
    </SafeAreaViewContainer>
  );
};
