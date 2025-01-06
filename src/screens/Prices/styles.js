import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF1F6',
  },
  text: {
    fontSize: windowWidth * 0.06,
    fontFamily: 'ZenDots',
    color: 'black',
  },
  text_position: {width: windowWidth * 0.95, marginTop: windowHeight * 0.02},
  position: {alignItems: 'center', marginTop: windowHeight * 0.05},
});
