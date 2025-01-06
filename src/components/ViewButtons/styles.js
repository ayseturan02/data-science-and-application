import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6720',
    height: windowWidth * 0.12,
    width: windowWidth * 0.95,
    borderRadius: windowWidth * 0.02,
  },
  text: {
    textAlign: 'center',
    fontSize: windowWidth * 0.04,
    color: 'white',
    marginTop: windowHeight * 0.015,
    fontFamily: 'Ruda',
  },
});
