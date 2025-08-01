import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import QuestionCard from "../components/question-card";
import Card from "../components/card";
import Button from "../components/button";
import { useQuizContext } from "../providers/quiz-provider";

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions } =
    useQuizContext();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.timer}>20 secs</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>best Score: </Text>
          </Card>
        )}
        <Button
          title="Next"
          rightIcon={<FontAwesome6 name="arrow-right" size={16} color="#fff" />}
          onPress={onNext}
          onLongPress={() => console.warn("long pressed")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fdfef4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  timer: {
    textAlign: "center",
    marginTop: 20,
    color: "#005055",
    fontWeight: 700,
  },
});
