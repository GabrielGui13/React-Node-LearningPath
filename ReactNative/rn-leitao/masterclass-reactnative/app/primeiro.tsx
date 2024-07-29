import { View, Text, StyleSheet } from "react-native";
import { styles } from "@/constants/styles"

export default function TelaPrimeiro() {
	return (
		<View style={styles.centralizado}>
			<Text>Primeiro Componente</Text>
		</View>
	)
}

// const styles = StyleSheet.create({
// 	centralizado: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	}
// })