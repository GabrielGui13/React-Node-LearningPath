import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export const useRouter = () => {
	const routesNames = {
		auth: {
			Login: "Login",
			Register: "Register",
			CodeGenerator: "CodeGenerator",
			InviteCode: "InviteCode"
		},
		app: {
			Home: "Home"
		},
	}

	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

	return { routesNames, navigation }
}