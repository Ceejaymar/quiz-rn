import { useState } from "react";
import { View } from "react-native";

import Card from "./card";
import AnswerOption from "./answer-option";
import { Question } from "../types";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  //   let selectedOption = question.options[0];
  const [selected, setSelected] = useState<string | undefined>(undefined);

  function onHandleAnswerSelected(selected: string) {
    setSelected(selected);
  }

  return (
    <Card title={question.title}>
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
    </Card>
  );
}
