import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../globalStyles/Styles';

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
          <View style={styles.itemContainer1}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.description}</Text>
            <Text>{item.value}</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={item.quantity || '1'}
              onChangeText={(text) => handleIncreaseQuantity(item.id)}
            />
            <View style={styles.buttonContainer}>
            <Button title="Eliminar" onPress={() => handleDeleteItem(item.id)} />
            <View style={styles.buttonContainer}>
            <Button title="Pagar" onPress={() => navigation.navigate('Payment')} />
          </View>
          </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text>Total: ${calculateTotal()}</Text>
    </View>
  );
}