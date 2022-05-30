import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch(
    "https://us-central1-js04-b4877.cloudfunctions.net/api/next21/feed"
  );
  return res.json();
};

export default function FetchData() {
  const { data, status } = useQuery("Data", fetchData);
  console.log(data);
  return (
    <View>
      <Text>fetch</Text>
    </View>
  );
}
