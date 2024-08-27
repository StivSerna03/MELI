import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import styles from '../globalStyles/Styles';

const mockFavorites = [
  {
    id: '1',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/26445972/resize/610/610?1672738540',
    description: 'DEATHADDER V2 SPECIAL RGB - RAZER',
    value: '280.000',
    status: 'Disponible'
  },
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000',
    status: 'Disponible'
  },
  {
    id: '5',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000',
    status: 'Disponible'
  }
];

export default function MyFavoritesScreen({ navigation }) {
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
              <Button title="Ver producto" onPress={() => navigation.navigate('ProductDetails', { product: item })} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}