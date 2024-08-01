import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;


export default function GameScreen({ userNumber }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function nextGuessHandler(direction) {
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		}
		if (direction === 'greater') {
			minBoundary = currentGuess + 1;
		}
		
		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		setCurrentGuess(newRndNumber)
	}

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
				<PrimaryButton >+</PrimaryButton>
				<PrimaryButton>-</PrimaryButton>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    borderRadius: 5,
  },
});
