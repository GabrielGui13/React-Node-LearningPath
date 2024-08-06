import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";


export default function MealDetailScreen() {
	const route = useRoute()
	
	return (
	<View>
		<Text>{route.params.mealId}</Text>
	</View>
	)
}