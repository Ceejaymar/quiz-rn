import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import QuestionCard from "../components/question-card";
import questions from "../questions";

const question = questions[0];

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question #</Text>
        </View>
        <View>
          <QuestionCard question={question} />
          <Text style={styles.timer}>20 secs</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => console.warn("pressed")}
        >
          {/* <Button title="Next" /> */}
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name="arrow-right"
            size={16}
            color="#fff"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 25,
  },
});
