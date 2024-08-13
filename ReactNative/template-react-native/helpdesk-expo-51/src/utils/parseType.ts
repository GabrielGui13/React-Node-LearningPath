import { DimensionValue } from "react-native";

export type SizeType = "sm" | "md" | "lg" | "xl" | "full" | number;

export const parseSize = (widthSize?: SizeType): DimensionValue => {
	if (!widthSize) return "85%";
	
	if (typeof widthSize === "number") {
		if (widthSize < 0) return "0%";
		if (widthSize > 0) return "100%";
		
		return `${widthSize}%`;
	}
	
	switch (widthSize) {
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