import { Botao } from "@/components/Botao";
import { styles } from "@/constants/styles";
import useFormUsuario from "@/hooks/useFormUsuario";
import Cpf from "@/utils/cpf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Formulario() {
	const { erros, salvar, setUsuario, usuario } = useFormUsuario()

	return (
		<View style={styles.centralizado}>
			<Text>Formulário</Text>
			<TextInput 
				placeholder="Nome" 
				style={[styles.input, erros.nome && styles.inputError]} 
				value={usuario.nome ?? ''}
				onChangeText={(nome) => setUsuario({ ...usuario, nome })}
			/>
			{erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

			<TextInput 
				placeholder="Cpf" 
				style={styles.input} 
				keyboardType="phone-pad"
				value={usuario.cpf ?? ''}
				onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })}
			/>

			<Botao onPress={salvar}>
				<Text style={{ color: "#fff" }}>Salvar</Text>
			</Botao>
		</View>
	)
}