import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Colors } from "@/constants/Colors";

type ButtonVariant = "primary" | "secondary" | "outline";

interface Props {
  title: string;
  onPress: () => void;
  variant: ButtonVariant;
}
export const Button = ({ title, onPress, variant = "primary" }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant]]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange.background,
  },
  text: {
    color: "#fff",
    marginBottom: 2,
    fontSize: 24,
    fontFamily: "BadScriptRegular",
  },
  secondary: {
    paddingHorizontal: 48,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  primary: {},
  outline: {},
});
