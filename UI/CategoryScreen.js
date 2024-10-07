import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../globalStyles/Styles';

const categories = [
  { id: '1', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47464917/resize/610/610?1712433783', name: 'Combos' },
  { id: '2', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36227942/resize/610/610?1686260095', name: 'Teclados' },
  { id: '3', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30269539/resize/610/610?1671118678', name: 'Mouse' },
  { id: '4', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44755953/resize/610/610?1706041929', name: 'Audífonos' },
  { id: '5', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/49860348/resize/610/610?1718692541', name: 'Portátiles' },
];

const CategoryItem = ({ category, onPress }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: category.image }} style={styles.image} />
    <View style={styles.itemInfo}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Ver productos</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function CategoryScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CategoryItem 
      category={item} 
      onPress={() => navigation.navigate('ProductList', { category: item.name })} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
