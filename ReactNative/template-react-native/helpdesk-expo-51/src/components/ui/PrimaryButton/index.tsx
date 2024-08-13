import { ReactNode } from "react";
import {
  PrimaryButtonTouchable,
  PrimaryButtonText
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { parseSize, SizeType } from "../../../utils/parseType";

interface PrimaryButtonProps extends TouchableOpacityProps {
  size?: SizeType;
}

export const PrimaryButton = ({
  children,
  size,
  style,
  ...props
}: PrimaryButtonProps) => {

  return (
		<PrimaryButtonTouchable
			activeOpacity={0.9}
			style={[{ width: parseSize(size) }, style]}
			{...props}
		>
			<PrimaryButtonText>{children}</PrimaryButtonText>
		</PrimaryButtonTouchable>
  );
};
