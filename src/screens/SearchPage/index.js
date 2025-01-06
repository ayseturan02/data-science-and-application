import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Back} from '../../components';
import {searchWhite} from './../../assets/icons/index';
import Card from './../../components/Card';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    image: require('./../../assets/images/iphone11.png'),
    name: 'IPHONE 11 telefon 64 GB beyaz',
    price: '22.000',
    seller: require('./../../assets/images/trendyol.png'),
    sellerName: 'Trendyol',
  },

  {
    id: '2',
    image: require('./../../assets/images/iphone11_black.png'),
    name: 'IPHONE 11 telefon 128 GB siyah',
    price: '25.000',
    seller: require('./../../assets/images/n.png'),
    sellerName: 'N11',
  },
  {
    id: '3',
    image: require('./../../assets/images/iphone11_pro.png'),
    name: 'IPHONE 11 telefon 256 GB kırmızı',
    price: '25.000',
    seller: require('./../../assets/images/sok.png'),
    sellerName: 'sok',
  },
  {
    id: '4',
    image: require('./../../assets/images/iphone11_sari.png'),
    name: 'IPHONE 11 telefon 512 GB mavi',
    price: '24.000',
    seller: require('./../../assets/images/media.png'),
    sellerName: 'MEDIAMARK',
  },
  {
    id: '5',
    image: require('./../../assets/images/iphone11.png'),
    name: 'IPHONE 11 telefon 64 GB beyaz',
    price: '25.000',
    seller: require('./../../assets/images/ayuzbir.png'),
    sellerName: 'A101',
  },
  {
    id: '6',
    image: require('./../../assets/images/iphone11.png'),
    name: 'IPHONE 11 telefon 64 GB beyaz',
    price: '23.000',
    seller: require('./../../assets/images/n.png'),
    sellerName: 'N11 ',
  },
  {
    id: '7',
    image: require('./../../assets/images/iphone11.png'),
    name: 'IPHONE 11 telefon 64 GB beyaz',
    price: '24.000',
    seller: require('./../../assets/images/media.png'),
    sellerName: 'MEDIAMARK',
  },
];
const SearchPage = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const filteredData = DATA.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
  const handleProductSelect = name => {
    const sameNameProducts = DATA.filter(item => item.name === name);
    const sortedProducts = sameNameProducts.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price),
    );
    if (sortedProducts.length > 0) {
      navigation.navigate('Prices', {products: sortedProducts});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EFF1F6'}}>
      <Back />
      <View style={styles.container}>
        <TextInput
          placeholder="Ne aramalısın?"
          paddingLeft={windowWidth * 0.1}
          value={query}
          onChangeText={setQuery}
          style={styles.search}
        />
      </View>
      <View style={styles.icon}>
        <Image source={searchWhite} style={styles.icon_size} />
      </View>
      <View style={styles.position}>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouterNames.HOMEPAGE)}>
          <Text style={styles.text}>İptal</Text>
        </TouchableOpacity>
      </View>
      {query.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={({item}) => (
            <Card
              item={item}
              image={item.image}
              name={item.name}
              price={item.price}
              seller={item.seller}
              sellerName={item.sellerName}
              onPress={() => handleProductSelect(item.name)}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{marginTop: windowWidth * 0.07}}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchPage;
