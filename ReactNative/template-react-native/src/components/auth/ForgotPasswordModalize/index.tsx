import { Portal } from "react-native-portalize";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { forwardRef } from "react";
import { BaseText } from "../../ui/BaseText";
import { ForgotPasswordModalizeContainer } from "./styles";
import { useTheme } from "styled-components/native";
import { Input } from "../../ui/Input";
import { PrimaryButton } from "../../ui/PrimaryButton";
import { View } from "react-native";
import { LinkText } from "../../ui/LinkText";

interface ForgotPasswordModalizeProps extends ModalizeProps {}

export const ForgotPasswordModalize = forwardRef(
  ({ ...props }: ForgotPasswordModalizeProps, ref) => {
		const theme = useTheme()
		
    return (
      <Portal>
        <Modalize
          {...props}
          ref={ref}
          scrollViewProps={{ alwaysBounceVertical: false }}
					adjustToContentHeight
					// snapPoint={400}
          // modalHeight={400}
					// alwaysOpen={400}
        >
          <ForgotPasswordModalizeContainer>
						<View style={{ gap: 10 }}>
							<BaseText size="md" color={theme.colors.text_primary_light} weight="bold">Esqueceu sua senha?</BaseText>
							<BaseText size="sm">Informe seu email para enviarmos as instruções de como redefinir sua senha.</BaseText>
							<Input label="Email" placeholder="Informe o email" size="full" />
						</View>
						<View style={{ gap: 10 }}>
							<PrimaryButton size="full">Enviar</PrimaryButton>
							<View style={{ flexDirection: "row", justifyContent: "center" }}>
								<BaseText size={"xs"}>Não lembro meu email, fale com o{" "}</BaseText>
								<LinkText size={"xs"} color={theme.colors.text_primary_light} weight="bold" >suporte</LinkText>
							</View>
						</View>
					</ForgotPasswordModalizeContainer>
        </Modalize>
      </Portal>
    );
  },
);
