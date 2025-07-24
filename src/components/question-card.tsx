import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import AnswerOption from "./answer-option";
import { Question } from "../types";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  //   let selectedOption = question.options[0];
  const [selected, setSelected] = useState(null);

  function onHandleAnswerSelected(selected: string) {
    setSelected(selected);
  }

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{question.title}</Text>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => {
          return (
            <AnswerOption
              key={index}
              answer={option}
              isSelected={option === selected}
              onPress={() => onHandleAnswerSelected(option)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: 500,
  },
});
