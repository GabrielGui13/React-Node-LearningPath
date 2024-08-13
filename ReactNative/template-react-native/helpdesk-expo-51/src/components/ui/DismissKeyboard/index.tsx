import { Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";

interface DismissKeyboardProps extends TouchableWithoutFeedbackProps {}

export const DismissKeyboard = ({ children, onPress, ...props }: DismissKeyboardProps) => {
	return (
		<TouchableWithoutFeedback 
			onPress={(e) => {
				e.preventDefault()
				onPress
				Keyboard.dismiss()
			}}
			{...props}
		>
			{children}
		</TouchableWithoutFeedback>
	)
}