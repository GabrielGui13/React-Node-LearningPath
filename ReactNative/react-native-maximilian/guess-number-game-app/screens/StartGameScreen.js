import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  Keyboard,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Colors } from "../constants/colors";
import { useState } from "react";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  function resetInputHandler() {
    setEnteredNumber("");
    Keyboard.dismiss();
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number betwee 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ],
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height > 380 ? 30 : 100;

  return (
    // inner ScrollView with keyboardShouldPersistTaps="handled" to dismiss keyboard when tapping outside of the input
    // KeyboardAvoidingView get the keyboard up and allows keyboard dismiss when clicking other places
    <ScrollView style="">
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}
      > */}
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize=""
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
