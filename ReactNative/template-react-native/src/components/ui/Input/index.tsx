import { TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  InputContainer,
  InputError,
  InputErrorWrapper,
  InputField,
  InputLabel,
  InputWrapper,
} from "./styles";
import { parseWidthSize, WidthSizeType } from "../../../utils/parseWidthSize";
import { useTheme } from "styled-components";

interface InputProps extends TextInputProps {
  size?: WidthSizeType;
  label?: string;
  error?: string;
  showPassword?: boolean;
  onShowPassword?: () => void;
}

export const Input = ({
  size = "xl",
  label,
  error,
  showPassword,
  onShowPassword,
  ...props
}: InputProps) => {
  const theme = useTheme();
  const password = showPassword !== undefined;

  return (
    <InputContainer style={{ width: parseWidthSize(size) }}>
      <InputLabel style={{ display: label ? "flex" : "none" }}>
        {label}
      </InputLabel>
      <InputWrapper style={{ borderColor: error && theme.colors.attention }}>
        <InputField {...props} keyboardType="ascii-capable" secureTextEntry={password && !showPassword} />
        <Ionicons
          onPress={onShowPassword}
          style={{ display: password ? "flex" : "none" }}
          name={`${showPassword ? "eye" : "eye-off"}`}
          color={theme.colors.border}
          size={25}
        />
      </InputWrapper>
      <InputErrorWrapper style={{ display: error ? "flex" : "none" }}>
        <Ionicons name="warning" color={theme.colors.attention} size={15} />
        <InputError>{error}</InputError>
      </InputErrorWrapper>
    </InputContainer>
  );
};
