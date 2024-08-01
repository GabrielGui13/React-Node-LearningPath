import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		borderRadius: 8,
		margin: 24,
		padding: 24,
		justifyContent: "center",
		alignItems: "center"
	},
	numberText: {
		color: Colors.accent500,
		fontSize: 36,
		fontWeight: 'bold'
	}
})