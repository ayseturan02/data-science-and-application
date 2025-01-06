import { StyleSheet, Text, View, Dimensions } from "react-native";
import { barcode } from "../../assets/icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default styles = StyleSheet.create({
  text_size: {
    fontSize: windowWidth * 0.1,
    fontFamily: "EricaOne",
  },
  placeholder: {
    position: "absolute",
    left: windowWidth * 0.18,
    top: windowHeight * 0.34,
    fontSize: windowWidth * 0.04,
    fontFamily: "Ruda",
    color: "#9F9999",
  },
  text_input: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 0.06,
    borderColor: "#FF6720",
    borderWidth: windowWidth * 0.006,
    marginTop: windowHeight * 0.05,
  },
  icon_size: {
    height: windowWidth * 0.06,
    width: windowWidth * 0.06,
    marginTop: windowHeight * -0.05,
    right: windowWidth * 0.38,
  },
  barcode: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
  },
  barcode_container: {
    height: windowHeight * 0.08,
    width: windowWidth * 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
