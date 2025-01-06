import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  image: {
    height: windowWidth * 0.04,
    width: windowWidth * 0.04,
  },
  position: {marginLeft: windowWidth * 0.02, marginTop: windowHeight * 0.02},
});
