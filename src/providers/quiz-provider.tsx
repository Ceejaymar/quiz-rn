import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

import questions from "../questions";
import { type Question } from "../types";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selected?: string;
  setSelected: (answer: string) => void;
  score: number;
  totalQuestions: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelected: () => {},
  score: 0,
  totalQuestions: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [score, setScore] = useState(0);
  const isFinished = questionIndex >= questions.length;

  function restart() {
    setQuestionIndex(0);
    setSelected("");
    setScore(0);
  }

  function onNext() {
    if (isFinished) {
      restart();
      return;
    }

    if (selected === question?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setQuestionIndex((prev) => prev + 1);
  }

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selected,
        setSelected,
        score,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
