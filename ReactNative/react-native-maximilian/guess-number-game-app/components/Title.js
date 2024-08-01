import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
	return (
		<Text style={styles.title}>{children}</Text>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#ddb52f',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#ddb52f',
		padding: 12,
		borderRadius: 5
	}
});