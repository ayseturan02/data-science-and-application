import { StyleSheet, Dimensions, Button } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default styles = StyleSheet.create({
  image: {
    height: windowWidth * 1,
    width: windowWidth * 1,
  },
  container: { flex: 1, backgroundColor: "white" },
  image_position: {
    width: windowWidth * 0.96,
    alignSelf: "flex-start",
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.02,
  },
  name_text: {
    fontSize: windowWidth * 0.05,
    fontFamily: "ZenDots",
    color: "black",
  },
  line_position: { alignItems: "center", marginTop: windowHeight * 0.02 },
  line_view: {
    backgroundColor: "#FF6720",
    height: windowWidth * 0.005,
    width: windowWidth * 0.95,
  },
  seller: {
    fontSize: windowWidth * 0.04,
    fontFamily: "ZenDots",
    color: "#FF6720",
  },
  button_position: { alignItems: "center", marginTop: windowHeight * 0.02 },
});
