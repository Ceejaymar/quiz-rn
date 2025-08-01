import { useState } from "react";
import { View } from "react-native";

import Card from "./card";
import AnswerOption from "./answer-option";
import { Question } from "../types";
import { useQuizContext } from "../providers/quiz-provider";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option, index) => {
          return <AnswerOption key={index} answer={option} />;
        })}
      </View>
    </Card>
  );
}
