import { View, Image, StyleSheet } from "react-native";
import React from "react";

const SplashScreenImg = require("../../assets/images/splashscreen.png");

export function SplashScreen() {
  return (
    <View>
      <Image source={SplashScreenImg} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 113,
    height: 164,
  },
});
