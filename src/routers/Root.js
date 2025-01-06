import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomePage,
  Prices,
  Splash,
  SearchPage,
  Product,
  QRScanner,
} from './../screens/index';
const Stack = createNativeStackNavigator();
import {RouterNames} from './../config/index';
const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouterNames.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouterNames.HOMEPAGE}
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouterNames.PRODUCT}
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouterNames.PRICES}
        component={Prices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouterNames.SEARCH_PAGE}
        component={SearchPage}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={RouterNames.QR_SCANNER}
        component={QRScanner}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});
