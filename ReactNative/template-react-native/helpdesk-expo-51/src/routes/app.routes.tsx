import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/app/Home"

const Stack = createNativeStackNavigator()

export const AppRoutes = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Home"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	)
}