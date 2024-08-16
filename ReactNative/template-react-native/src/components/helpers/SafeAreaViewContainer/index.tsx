import { SafeAreaViewProps } from "react-native-safe-area-context"
import { SafeAreaViewContainerField } from "./styles"

export const SafeAreaViewContainer = ({ children, ...props }: SafeAreaViewProps) => {
	return (
		<SafeAreaViewContainerField {...props} >
			{children}
		</SafeAreaViewContainerField>
	)
}