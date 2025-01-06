import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { search, barcode } from "./../../assets/icons/index";
import styles from "./styles";
import { FlatLists } from "../../components";
import { RouterNames } from "../../config";
const HomePage = () => {
  const Navigation = useNavigation();
  const [text, setText] = useState("");

  const handleScanner = () => {
    Navigation.navigate(RouterNames.QR_SCANNER);
  };
  return (
    <SafeAreaView
      style={{ height: windowHeight * 1, backgroundColor: "white" }}
    >
      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: windowHeight * 0.16 }}>
          <Text
            style={[
              styles.text_size,
              {
                color: "#EF242C",
              },
            ]}
          >
            en ucuzunu bul
          </Text>
        </View>
        <View style={{ marginTop: windowHeight * -0.046 }}>
          <Text
            style={[
              styles.text_size,
              {
                color: "#FF6720",
              },
            ]}
          >
            en ucuzunu bul
          </Text>
        </View>
        <View style={{ marginTop: windowHeight * -0.046 }}>
          <Text
            style={[
              styles.text_size,
              {
                color: "#FEE100",
              },
            ]}
          >
            en ucuzunu bul
          </Text>
        </View>

        {text === "" && <Text style={styles.placeholder}>ne ariyon</Text>}

        <TextInput
          style={styles.text_input}
          value={text}
          paddingLeft={windowWidth * 0.12}
          onChangeText={setText}
          onFocus={() => Navigation.navigate(RouterNames.SEARCH_PAGE)}
        />
        <Image source={search} style={styles.icon_size} />
        <FlatLists />
        <TouchableOpacity onPress={handleScanner}>
          <View style={styles.barcode_container}>
            <Image source={barcode} style={styles.barcode} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
