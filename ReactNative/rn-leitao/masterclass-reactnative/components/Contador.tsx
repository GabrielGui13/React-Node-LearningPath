import { View, Text } from "react-native"
import { styles } from '@/constants/styles';
import { useState } from "react";
import { Botao } from "./Botao";
import { Ionicons } from "@expo/vector-icons";

export interface ContadorProps {
	valorInicial?: number
}

export function Contador(props: ContadorProps) {
	const [numero, setNumero] = useState(props.valorInicial ?? 0)
	
	return (
		<View style={styles.centralizado}>
			<Text style={{ fontSize: 50 }}>{numero}</Text>
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<Botao onPress={() => setNumero((prev) => prev + 1)}>
					<Ionicons name="add" size={24} color="white"></Ionicons>
				</Botao>
				<Botao onPress={() => setNumero((prev) => prev - 1)}>
					<Ionicons name="remove" size={24} color="white"></Ionicons>
				</Botao>
			</View>
		</View>
	)
}