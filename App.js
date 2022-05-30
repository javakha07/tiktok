import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import FeedScreen from "./app/screens/FeedScreen";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FetchData from "./app/API/FetchData";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCallback } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";

export default function App() {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
  }, []);

  const queryClient = new QueryClient();

  let [fontsLoaded] = useFonts({
    InterSemiBold: require("./app/assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("./app/assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>loading</Text>;
  }
  return (
    <KeyboardAvoidingView style={styles.avoid}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <FeedScreen />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avoid: {
    flex: 1,
  },
});
