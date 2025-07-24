import { StyleSheet, Text, Pressable } from "react-native";

type AnswerOption = {
  answer: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function AnswerOption({
  answer,
  isSelected,
  onPress,
}: AnswerOption) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style.container,
        isSelected && {
          backgroundColor: "#e1f396",
          borderColor: "#e1f396",
        },
      ]}
    >
      <Text>{answer}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 50,
  },
});
