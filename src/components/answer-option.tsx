import { StyleSheet, Text, Pressable } from "react-native";

import { useQuizContext } from "../providers/quiz-provider";

type AnswerOption = {
  answer: string;
};

export default function AnswerOption({ answer }: AnswerOption) {
  const { selected, setSelected } = useQuizContext();

  const isSelected = answer === selected;

  function onHandleAnswerSelected(selected: string) {
    setSelected(selected);
  }
  return (
    <Pressable
      onPress={() => setSelected(answer)}
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
