import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';

const mockProducts = [
  {
    id: '1',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/26445972/resize/610/610?1672738540',
    description: 'DEATHADDER V2 SPECIAL RGB - RAZER',
    value: '280.000'
  },
  {
    id: '2',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36230972/resize/610/610?1704274014',
    description: 'BARRACUDA X QUARTZ ROSA INALAMBRICAS - RAZER',
    value: '540.000'
  },
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000'
  },
  {
    id: '4',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45745892/resize/610/610?1708626083',
    description: 'COMBO / RYZEN 5 8500G + RX VEGA',
    value: '2.600.000'
  },
  {
    id: '5',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000'
  }
];

export default function ProductListScreen({ navigation }) {
  const [search, setSearch] = React.useState('');

  const filteredProducts = mockProducts.filter(product => 
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar productos"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.description}</Text>
            <Text>{item.value}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});
