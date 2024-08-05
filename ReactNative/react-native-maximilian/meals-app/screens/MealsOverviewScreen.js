import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ navigation, route }) {
	// const route = useRoute()
	const catId = route.params.categoryId

	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)

	function renderMealItem(itemData) {
		return (
			<MealItem title={itemData.item.title} />
		)
	}
	
	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	}
})