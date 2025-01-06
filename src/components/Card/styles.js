import {Dimensions, StyleSheet, Text, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view_container: {
    height: windowWidth * 0.7,
    width: windowWidth * 0.45,
    borderRadius: windowWidth * 0.03,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: windowWidth * 0.45,
    width: windowWidth * 0.45,
    borderRadius: windowWidth * 0.03,
  },
  text: {
    fontFamily: 'CantoraOne',
    fontSize: windowWidth * 0.04,
    color: 'black',
  },
});
