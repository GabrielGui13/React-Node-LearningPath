import { ReactNode } from "react";
import {
  PrimaryButtonTouchable,
  PrimaryButtonText
} from "./styles";
import { TouchableOpacityProps } from "react-native";
import { parseWidthSize, WidthSizeType } from "../../../utils/parseWidthSize";

interface PrimaryButtonProps extends TouchableOpacityProps {
  size?: WidthSizeType;
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
			style={[{ width: parseWidthSize(size) }, style]}
			{...props}
		>
			<PrimaryButtonText>{children}</PrimaryButtonText>
		</PrimaryButtonTouchable>
  );
};
