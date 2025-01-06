import { SafeAreaView, Dimensions, Image, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Back, ViewButtons } from "../../components";
import styles from "./styles";
const windowHeight = Dimensions.get("window").height;
const Product = () => {
  const route = useRoute();
  const { image, name, sellerName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Back />
      <View style={{ alignItems: "center" }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.image_position}>
        <Text style={styles.name_text}>{name}</Text>
      </View>
      <View style={styles.line_position}>
        <View style={styles.line_view} />
      </View>
      <View style={{ margin: windowHeight * 0.02 }}>
        <Text style={styles.seller}>{sellerName}</Text>
        <View style={styles.button_position}>
          <ViewButtons text={"Mağazada Görüntüle"} />
          <View style={{ marginTop: windowHeight * 0.02 }}>
            <ViewButtons text={"Haritada Görüntüle"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;
