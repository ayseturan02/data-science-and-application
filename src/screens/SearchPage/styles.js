import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {search} from '../../assets/icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  icon_size: {
    height: windowWidth * 0.05,
    width: windowWidth * 0.05,
  },
  search: {
    height: windowWidth * 0.13,
    width: windowWidth * 0.95,
    borderWidth: windowWidth * 0.007,
    borderColor: '#D9D9D9',
    borderRadius: windowWidth * 0.03,
  },
  text: {
    fontFamily: 'Ruda',
    color: '#ACA4A4',
    fontSize: windowWidth * 0.04,
  },
  position: {
    width: windowWidth * 0.93,
    alignItems: 'flex-end',
    marginTop: -windowHeight * 0.025,
  },
  icon: {
    marginTop: -windowHeight * 0.045,
    paddingLeft: windowWidth * 0.055,
  },
  container: {alignItems: 'center', marginTop: windowWidth * 0.03},
});
