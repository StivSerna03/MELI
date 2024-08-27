import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import styles from '../globalStyles/Styles';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
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
              <Button 
                title="Ver detalles" 
                onPress={() => navigation.navigate('ProductDetails', { product: item })}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}