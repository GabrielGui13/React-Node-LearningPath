import { PressableProps } from "react-native";
import { LinkTextContent, LinkTextPressable } from "./styles";
import { TextSizeType } from "../../../utils/parseTextSize";
import { TextWeightType } from "../../../utils/parseTextWeight";
import { BaseText } from "../BaseText";
import { ReactNode, useState } from "react";
import { useRouter } from "../../../hooks/useRouter";
import { useNavigation } from "@react-navigation/native";

type TextAlignType = "center" | "auto" | "left" | "right" | "justify";

interface LinkTextProps extends PressableProps {
  color?: string;
  size?: TextSizeType;
  align?: TextAlignType;
  full?: boolean;
  weight?: TextWeightType;
  to?: string;
}

export const LinkText = ({
  color,
  size,
  align,
  weight,
	children,
  to,
  ...props
}: LinkTextProps) => {
  const { navigation } = useRouter()
  // const navigation = useNavigation()

  return (
    <LinkTextPressable 
      {...props}
      onPressIn={() => {
        to && navigation.navigate(String(to))
      }}
    >
      <BaseText
        color={color}
        size={size}
        align={align}
        weight={weight}
        style={{ textDecorationLine: "underline" }}
      >
        {children as ReactNode}
      </BaseText>
    </LinkTextPressable>
  );
};

