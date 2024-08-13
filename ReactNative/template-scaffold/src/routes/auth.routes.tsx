import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/auth/Login"
import { useNavigation } from "@react-navigation/native";
import { Register } from "../screens/auth/Register";

const Stack = createNativeStackNavigator()

export const AuthRoutes = () => {	
	const navigation = useNavigation();

	return (
		<Stack.Navigator 
			initialRouteName="Login"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	)
}