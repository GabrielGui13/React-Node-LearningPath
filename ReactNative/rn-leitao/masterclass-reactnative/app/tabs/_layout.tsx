import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";

export default function Layout(props: any) {
	const nav: any = useNavigation()

	const icone = (nome: any) => {
		return ({ focused }: any) => <Ionicons name={nome} size={18} color={focused ? '#3A98FF' : '#000'} />
	}
	
	return (
		<Tabs screenOptions={{ headerShown: true }}>
			<Tabs.Screen 
				name="index" 
				options={{
					title: 'Início',
					tabBarIcon: icone('home-outline'),
					headerShown: false
				}} 
			/>
			<Tabs.Screen 
				name="cursos" 
				options={{
					title: 'Cursos',
					tabBarIcon: icone('play-circle-outline'),
					headerShown: false
				}} 
			/>
			<Tabs.Screen 
				name="config" 
				options={{
					title: 'Configurações',
					tabBarIcon: icone('settings-outline'),
					headerShown: false
				}} 
			/>
			<Tabs.Screen 
				name="mais" 
				options={{
					title: 'Mais Opções',
					tabBarIcon: icone('menu'),
					headerShown: false
				}}
				listeners={{
					tabPress: (e) => {
						e.preventDefault()
						nav?.openDrawer()
						// alert('Clicou em Mais')
					}
				}} 
			/>
		</Tabs>
	)
}