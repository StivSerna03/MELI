import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Datos mock para los ítems favoritos
const mockFavorites = [
  {
    id: '1',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/26445972/resize/610/610?1672738540',
    description: 'DEATHADDER V2 SPECIAL RGB - RAZER',
    value: '280.000'
  },
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000'
  },
  {
    id: '5',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000'
  }
];

export default function MyFavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>

      <FlatList
        data={mockFavorites}
        renderItem={({ item }) => (
          <View style={styles.favoriteContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.status}>Estado: {item.status}</Text>
            </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
});
