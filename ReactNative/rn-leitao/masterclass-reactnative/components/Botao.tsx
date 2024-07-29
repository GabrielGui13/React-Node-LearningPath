import { Pressable, StyleSheet } from "react-native";

export interface BotaoProps {
	children: React.ReactNode;
	onPress?: () => void;
}

export function Botao(props: BotaoProps) {
	return (
		<Pressable
			onPress={props.onPress}
			style={({ pressed }) => [ // se tiver pressionado faz algos
				{ opacity: pressed ? 0.8 : 1 },
				styles.botao
			]}
		>
			{props.children}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	botao: {
		backgroundColor: '#3A7EFF',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 5,
	}
})