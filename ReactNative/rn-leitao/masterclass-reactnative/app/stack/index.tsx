import { Botao } from "@/components/Botao";
import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TelaInicial() {
	return (
		<View style={[styles.centralizado, { gap: 10 }]}>
			<Text>Tela Inicial</Text>
				<Botao>
					<Link href='/stack/nova' style={{ color: '#fff' }}>
							<Text>Ir para tela nova</Text>
					</Link>
				</Botao>
				<Botao>
					<Link href='/' style={{ color: '#fff' }}>
							<Text>Ir para início</Text>
					</Link>
				</Botao>
				<Botao>
					<Link href='/tabs/cursos' style={{ color: '#fff' }}>
							<Text>Ir para cursos</Text>
					</Link>
				</Botao>
		</View>
	)
}