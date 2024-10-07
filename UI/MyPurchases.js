import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../globalStyles/Styles';

const mockPurchases = [
  {
    id: '1',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/26445972/resize/610/610?1672738540',
    description: 'DEATHADDER V2 SPECIAL RGB - RAZER',
    value: '280.000',
    status: 'Procesando'
  },
  {
    id: '2',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36230972/resize/610/610?1704274014',
    description: 'BARRACUDA X QUARTZ ROSA INALAMBRICAS - RAZER',
    value: '540.000',
    status: 'Entregado'
  },
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000',
    status: 'Entregado'
  },
];

export default function MyPurchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      setTimeout(() => {
        setPurchases(mockPurchases);
      }, 1000); 
    };

    fetchPurchases();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Compras</Text>

      {purchases.length === 0 ? (
        <Text style={styles.loading}>Cargando compras...</Text>
      ) : (
        <FlatList
          data={purchases}
          renderItem={({ item }) => (
            <View style={styles.purchaseContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.value}>Valor: {item.value}</Text>
                <Text style={styles.status}>Estado: {item.status}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
