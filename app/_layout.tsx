import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    BrandonGrotesqueLight: require("../assets/fonts/Brandon_Grotesque_light.otf"),
    BrandonGrotesqueRegular: require("../assets/fonts/Brandon-Grotesque-regular.otf"),
    BrandonGrotesqueMedium: require("../assets/fonts/Brandon_Grotesque_medium.otf"),

    BadScriptRegular: require("../assets/fonts/BadScript-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
