import { StyleSheet, Text, View, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default styles = StyleSheet.create({
  card_container: {
    width: windowWidth * 0.95,
    backgroundColor: "#FFFFFF",
    height: windowWidth * 0.25,
    borderBottomWidth: windowWidth * 0.007,
    borderBottomColor: "#FF6720",
    borderRadius: windowWidth * 0.02,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "row",
    marginTop: windowHeight * 0.01,
  },
  image: {
    height: windowWidth * 0.25,
    width: windowWidth * 0.26,
    borderBottomLeftRadius: windowWidth * 0.02,
    borderTopLeftRadius: windowWidth * 0.02,
  },
  one: {
    backgroundColor: "#EFF1F6",
    height: windowWidth * 0.07,
    width: windowWidth * 0.07,
    borderRadius: windowWidth * 1,
    right: windowWidth * 0.03,
    bottom: windowHeight * 0.01,
  },
  two: {
    backgroundColor: "#EFF1F6",
    height: windowWidth * 0.07,
    width: windowWidth * 0.07,
    borderRadius: windowWidth * 1,
    right: windowWidth * 0.03,
    top: windowHeight * 0.07,
  },
  text_position: {
    justifyContent: "center",
    marginLeft: windowWidth * 0.07,
  },
  text_style: {
    fontSize: windowWidth * 0.05,
    color: "black",
    fontFamily: "RedditMono",
  },
});
