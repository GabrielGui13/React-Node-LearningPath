import { Text, TextProps, View } from "react-native";
import { BaseTextField } from "./styles";
import { parseTextSize, TextSizeType } from "../../../utils/parseTextSize";
import { parseTextWeight, TextWeightType } from "../../../utils/parseTextWeight";

type TextAlignType = "center" | "auto" | "left" | "right" | "justify";

interface BaseTextProps extends TextProps {
  color?: string;
  size?: TextSizeType;
  align?: TextAlignType;
  full?: boolean;
  weight?: TextWeightType;
}

export const BaseText = ({
  size,
  children,
  style,
  align,
  color,
  full,
  weight,
  ...props
}: BaseTextProps) => {
  return (
    <BaseTextField
      {...props}
      style={[
        style,
        size ? { fontSize: parseTextSize(size) } : {},
        align ? { textAlign: align } : {},
        color ? { color: color } : {},
        full ? { width: "100%" } : {},
        weight ? { fontFamily: parseTextWeight(weight) } : {}
      ]}
    >
      {children}
    </BaseTextField>
  );
};
