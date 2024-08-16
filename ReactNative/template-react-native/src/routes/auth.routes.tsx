import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/auth/Login"
import { Register } from "../screens/auth/Register";
import { CodeGenerator } from "../screens/auth/CodeGenerator";
import { useRouter } from "../hooks/useRouter";
import { InviteCode } from "../screens/auth/InviteCode";

const Stack = createNativeStackNavigator()

export const AuthRoutes = () => {
	const { routesNames } = useRouter()

	return (
		<Stack.Navigator 
			initialRouteName={"Login"}
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name={"Login"} component={Login} />
			<Stack.Screen name={routesNames.auth.Register} component={Register} />
			<Stack.Screen name={routesNames.auth.CodeGenerator} component={CodeGenerator} />
			<Stack.Screen name={routesNames.auth.InviteCode} component={InviteCode} />
		</Stack.Navigator>
	)
}