import { StyleSheet, View } from "react-native";

import { Button, SplashScreen } from "@/components";

export default function Index() {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <Button
        title={"Fruit Hub"}
        variant="secondary"
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
});
