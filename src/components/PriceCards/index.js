import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { trendyol, media, ayuzbir, n, sok } from "../../assets/images";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PriceCards = (props) => {
  const navigation = useNavigation();
  const { name, image, seller, sellerName, price, photo } = props;

  // Fotoğraf türüne göre renk belirleme
  let bottomColor;
  if (photo === trendyol) {
    bottomColor = "#FF6720";
  } else if (photo === media) {
    bottomColor = "#EF242C";
  } else if (photo === ayuzbir) {
    bottomColor = "#00BAD3";
  } else if (photo === "sok") {
    bottomColor = "#FFC107";
  } else if (photo === n) {
    bottomColor = "#5E3EBD";
  } else {
    bottomColor = "#FF6720"; // Varsayılan renk
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Product", {
          price: price,
          name: name,
          image: image,
          seller: seller,
          sellerName: sellerName,
        })
      }
    >
      <View style={{ marginTop: windowHeight * 0.02 }}>
        <View
          style={[
            styles.card_container,
            { borderBottomColor: bottomColor }, // Dinamik renk ekleme
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={photo} style={styles.image} />
            <View style={{ flexDirection: "column" }}></View>
            <View style={styles.text_position}>
              <Text style={styles.text_style}>Fiyat: {price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PriceCards;
