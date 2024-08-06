import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverviewScreen({ navigation, route }) {
	// const route = useRoute()
	const catId = route.params.categoryId

	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1)

	useLayoutEffect(() => { //runs before the first render to avoid unexpected layout issues, runs simoultaneously with the component rendering
		const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

		navigation.setOptions({
			title: categoryTitle
		})
	}, [catId, navigation]) //prevent from changing every render

	function renderMealItem(itemData) {
		const item = itemData.item
		
		const mealItemProps = {
			id: item.id,
			title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
		}
		
		return (
			<MealItem {...mealItemProps} />
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