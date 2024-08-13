import { TextInputProps } from "react-native";
import { InputContainer, InputField, InputLabel, InputWrapper } from "./styles";
import { parseSize, SizeType } from "../../../utils/parseType";

interface InputProps extends TextInputProps {
	size?: SizeType;
  label?: string;
}

export const Input = ({ size = "xl", label, ...props }: InputProps) => {

  return (
    <InputContainer style={{ width: parseSize(size) }}>
      <InputLabel style={{ display: label ? "flex" : "none" }}>{label}</InputLabel>
      <InputWrapper>
        <InputField {...props} />
      </InputWrapper>
    </InputContainer>
  );
};
