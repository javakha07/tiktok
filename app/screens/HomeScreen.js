import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import { useFonts } from "expo-font";
import AppButton from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>loading</Text>;
  }
  return (
    <Screen>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.4)", "transparent"]}
          style={styles.grad}
        />
        <Image style={styles.notif} source={require("../assets/bell.png")} />
        <AppText
          style={{
            fontFamily: "InterSemiBold",
            position: "absolute",
            top: 30,
            left: 40,
            fontSize: 16,
          }}
        >
          Recommended | Following
        </AppText>
        <View style={styles.buttonContainers}>
          <AppButton title="Follow" image={require("../assets/follow.png")} />
          <AppButton title="1956" image={require("../assets/like.png")} />
          <AppButton title="5632" image={require("../assets/comment.png")} />
          <AppButton title="2561" image={require("../assets/share.png")} />
        </View>
        <AppText
          style={{
            fontFamily: "InterBold",
            position: "absolute",
            bottom: 5,
            left: 15,
            fontSize: 16,
          }}
        >
          @Leslie_Alex {"\n"}
          We recently had a great project {"\n"}
          with Calvin Klein for which I got to {"\n"}
          design the logo - check it out! {"\n"}
          #SAP #AwesomeLogos
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grad: {
    position: "absolute",
    top: 0,
    height: 200,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    fontSize: 100,
    position: "absolute",
    top: 5,
    right: 5,
  },
  notif: {
    position: "absolute",
    top: 35,
    right: 5,
    width: 50,
    height: 45,
  },
  buttonContainers: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
});
