import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { PriceCards, Back } from "./../../components/index";

const Prices = () => {
  const route = useRoute();
  const { products } = route.params || [];

  if (!products || products.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Ürün bilgileri alınamadı.
        </Text>
      </SafeAreaView>
    );
  }
  const productName = products[0]?.name || "";

  return (
    <SafeAreaView style={styles.container}>
      <Back />
      <View style={styles.position}>
        <Text style={styles.text}>{productName}</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <PriceCards
              photo={item.seller}
              price={item.price}
              image={item.image}
              sellerName={item.sellerName}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Prices;
