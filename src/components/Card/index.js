import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';
const index = props => {
  const Navigation = useNavigation();
  const {image, name, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{margin: windowWidth * 0.025}}>
        <View style={styles.view_container}>
          <Image source={image} style={styles.image} />
          <View style={{padding: windowWidth * 0.02}}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;
