import { RFValue } from "react-native-responsive-fontsize";

export type TextSizeType = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | number;

export const parseTextSize = (textSize?: TextSizeType): number => {
	let textReturn = 16;
	
	if (typeof textSize === "number") {
		if (textSize <= 0) textReturn = 0;
		else textReturn = textSize;
	}
	
	switch (textSize) {
		case "xxs":
			textReturn = 10;
			break
		case "xs":
			textReturn = 12;
			break
		case "sm":
			textReturn = 14;
			break
		case "md":
			textReturn = 16;
			break
		case "lg":
			textReturn = 20;
			break
		case "xl":
			textReturn = 24;
			break
	}

	return RFValue(textReturn);
};