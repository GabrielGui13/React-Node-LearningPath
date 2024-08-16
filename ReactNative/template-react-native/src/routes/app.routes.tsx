import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/app/Home"
import { useRouter } from "../hooks/useRouter"

const Stack = createNativeStackNavigator()

export const AppRoutes = () => {
	const { routesNames } = useRouter()

	return (
		<Stack.Navigator 
			initialRouteName={routesNames.app.Home}
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name={routesNames.app.Home} component={Home} />
		</Stack.Navigator>
	)
}