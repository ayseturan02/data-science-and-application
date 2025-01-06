import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {back} from './../../assets/icons/index';

const Back = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.position}>
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.5}>
        <Image style={styles.image} source={back} />
      </TouchableOpacity>
    </View>
  );
};

export default Back;
