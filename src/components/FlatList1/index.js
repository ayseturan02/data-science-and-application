import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FlatList1 = ({photo}) => {
  return (
    <View style={{marginTop: windowWidth * 0.27}}>
      <Image
        source={photo}
        style={{height: windowWidth * 0.9, width: windowWidth *1.02}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FlatList1;
