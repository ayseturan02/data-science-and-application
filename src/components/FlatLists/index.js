import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList1 } from "./../../components/index";
const DATA = [
  {
    id: "1",
    image: require("./../../assets/images/media.png"),
  },
  {
    id: "2",
    image: require("./../../assets/images/sok.png"),
  },
  {
    id: "3",
    image: require("./../../assets/images/n.png"),
  },
  {
    id: "4",
    image: require("./../../assets/images/ayuzbir.png"),
  },
  {
    id: "5",
    image: require("./../../assets/images/trendyol.png"),
  },
  {
    id: "6",
    image: require("./../../assets/images/misas.png"),
  },
];

const FlatLists = () => {
  const [data, setData] = useState(DATA[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % DATA.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(DATA[counter]);
  }, [counter]);

  return (
    <FlatList
      data={[data]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FlatList1 photo={item.image} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FlatLists;

const styles = StyleSheet.create({});
