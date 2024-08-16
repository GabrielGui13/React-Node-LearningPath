import { Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";

interface DismissKeyboardProps extends TouchableWithoutFeedbackProps {}

export const DismissKeyboard = ({ children, style, onPress, ...props }: DismissKeyboardProps) => {
	return (
		<TouchableWithoutFeedback 
			onPress={(e) => {
				e.preventDefault()
				onPress
				Keyboard.dismiss()
			}}
			style={[{ flex: 1 }, style]}
			{...props}
		>
			{children}
		</TouchableWithoutFeedback>
	)
}