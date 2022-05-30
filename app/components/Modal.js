import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import AppTextInput from "./TextInput";
import Comment from "./Comment";
import colors from "../config/colors";
import AppText from "./Text";
import AppButton from "./Button";
import { ScrollView } from "react-native-gesture-handler";

const initialMessages = [
  "hi abcdefghijklmnop",
  "KDB 123 all I need is KDB 123",
];
export default function Modal({ indexProp, onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState(" ");

  const updateComments = () => {
    setMessages([input, ...messages]);
  };

  return (
    <BottomSheet
      snapPoints={["60%"]}
      index={indexProp}
      handleHeight={40}
      enablePanDownToClose
      onClose={onClose}
    >
      <ScrollView>
        <FlatList
          data={messages}
          keyExtractor={(message) => messages.indexOf(message.toString())}
          renderItem={({ item }) => {
            return (
              <Comment
                title={"user"}
                subTitle={item}
                image={require("../assets/profile.png")}
                onPress={() => console.log("Message selected", item)}
              />
            );
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  borderBottomColor: colors.light,
                  borderBottomWidth: 1,
                }}
              />
            );
          }}
        />
      </ScrollView>
      <View style={styles.inputCont}>
        <View style={styles.input}>
          <Image
            style={styles.image}
            source={require("../assets/profile.png")}
          />
          <View style={{ flexDirection: "column", flex: 1 }}>
            <AppText style={{ color: colors.black }}>Tom Hanks</AppText>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <AppTextInput
                onChange={setInput}
                width="80%"
                style={{ flex: 1 }}
              />
              <AppButton
                onPress={updateComments}
                image={require("../assets/upload.png")}
                title="1"
              />
            </View>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    justifyContent: "flex-end",
  },
  input: {
    flexDirection: "row",
    flex: 1,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 35,
    marginRight: 10,
  },
  container: { flex: 1 },
});
