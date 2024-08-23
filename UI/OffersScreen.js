import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Datos mock para los ítems en oferta
const mockOffers = [
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000',
    discount: '20%'
  },
  {
    id: '4',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45745892/resize/610/610?1708626083',
    description: 'COMBO / RYZEN 5 8500G + RX VEGA',
    value: '2.600.000',
    discount: '35%'
  },
  {
    id: '5',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000',
    discount: '60%'
  }
];

export default function OffersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas</Text>

      <FlatList
        data={mockOffers}
        renderItem={({ item }) => (
          <View style={styles.offerContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.value}>Valor: ${item.value}</Text>
              <Text style={styles.discount}>Descuento: {item.discount}</Text>
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
  offerContainer: {
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
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
});
