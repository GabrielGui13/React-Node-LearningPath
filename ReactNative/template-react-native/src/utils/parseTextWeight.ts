
export type TextWeightType = "thin" | "light" | "regular" | "medium" | "bold";

export const parseTextWeight = (textWeight?: TextWeightType): string => {
	let weight = "400Regular"
	
	switch (textWeight) {
		case "thin":
			weight = "100Thin";
		case "light":
			weight = "300Light";
		case "regular":
			weight = "400Regular";
		case "medium":
			weight = "500Medium";
		case "bold":
			weight = "700Bold";
	}

	return `Poppins_${weight}`
};