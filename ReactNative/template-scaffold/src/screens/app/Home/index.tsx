import { View, Text } from "react-native";
import { HomeContainer } from "./styles";
import { StatusBar } from "expo-status-bar";

export const Home = () => {
	return (
		<HomeContainer>
			<Text>Hello World!</Text>
			<StatusBar style="auto" />
		</HomeContainer>
	);
}