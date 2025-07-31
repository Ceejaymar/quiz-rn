import {
  View,
  Pressable,
  Text,
  StyleSheet,
  type PressableProps,
} from "react-native";
// import { type ComponentProps } from "react";

type Button = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;
// & ComponentProps<typeof Pressable>;

export default function Button({
  title,
  rightIcon,
  ...pressableProps
}: Button) {
  return (
    <Pressable style={styles.button} {...pressableProps}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  rightIcon: {
    position: "absolute",
    right: 25,
  },
});
