import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.buttonInnerContainer,
        ]}
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    //view
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInnerContainer: {
    //pressable
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
