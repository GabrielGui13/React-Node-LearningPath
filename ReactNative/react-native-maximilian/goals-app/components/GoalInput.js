import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image, StatusBar } from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredGoal) {
    setEnteredGoalText(enteredGoal);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
			<StatusBar backgroundColor='#4A2E92' />
      <View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
		padding: 16,
		backgroundColor: '#311b6b'
  },
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
		borderRadius: 6,
		backgroundColor: "#e4d0ff",
		color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
		marginTop: 16
  },
	button: {
		width: 100,
		marginHorizontal: 8
	}
});
