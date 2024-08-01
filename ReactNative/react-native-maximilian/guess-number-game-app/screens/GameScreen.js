import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>

			<View>
				<Text>Higher or lower?</Text>

			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24 
	},
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