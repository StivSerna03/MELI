import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const categories = [
  { id: '1', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47464917/resize/610/610?1712433783', name: 'Combos' },
  { id: '2', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36227942/resize/610/610?1686260095', name: 'Teclados' },
  { id: '3', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30269539/resize/610/610?1671118678', name: 'Mouse' },
  { id: '4', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44755953/resize/610/610?1706041929', name: 'Audifonos' },
  { id: '5', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/49860348/resize/610/610?1718692541', name: 'Portatiles' },
];

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});