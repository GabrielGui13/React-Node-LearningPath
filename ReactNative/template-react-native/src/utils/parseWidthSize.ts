import { DimensionValue } from "react-native";

export type WidthSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "full" | number;

export const parseWidthSize = (widthSize?: WidthSizeType): DimensionValue => {
	if (!widthSize) return "85%";
	
	if (typeof widthSize === "number") {
		if (widthSize < 0) return "0%";
		if (widthSize > 0) return "100%";
		
		return `${widthSize}%`;
	}
	
	switch (widthSize) {
		case "xs":
			return "15%";
		case "sm":
			return "25%";
		case "md":
			return "50%";
		case "lg":
			return "75%";
		case "xl":
			return "85%";
		case "full":
			return "100%";
	}
};