import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const mockItems = [
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

export default function ShoppingCartScreen() {
  const [items, setItems] = useState(mockItems);
  const navigation = useNavigation();

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: (parseInt(item.quantity) + 1).toString() } : item
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (parseInt(item.value) * parseInt(item.quantity)), 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.description}</Text>
            <Text>{item.value}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={item.quantity || '1'}
              onChangeText={(text) => handleIncreaseQuantity(item.id)}
            />
            <Button title="Eliminar" onPress={() => handleDeleteItem(item.id)} />
            <Button title="Comprar" onPress={() => navigation.navigate('Payment')} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text>Total: ${calculateTotal()}</Text>
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
  itemContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '50%',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});