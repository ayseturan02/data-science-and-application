import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { RouterNames } from "../../config";
const LoginScreen = (props) => {
  const Navigation = useNavigation();

  const [displayedText, setDisplayedText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#FF6720");
  const [textColor, setTextColor] = useState("white");

  const fullText = "En ucuzunu bul!";
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
        setBackgroundColor("white");
        setTextColor("#FF6720");
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => Navigation.navigate("HomePage")}>
        <View style={[styles.container, { backgroundColor }]}>
          <Animated.Text style={[styles.text, { color: textColor }]}>
            {displayedText}
          </Animated.Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 1,
    width: windowWidth * 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: windowWidth * 0.1,
    fontFamily: "ZenDots",
  },
});

export default LoginScreen;
