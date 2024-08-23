import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const mockItems = [
  {
    id: '1',
    image: 'https://via.placeholder.com/50',
    description: 'Producto 1',
    value: '1000',
    quantity: '1'
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/50',
    description: 'Producto 2',
    value: '2000',
    quantity: '2'
  }
];

export default function PaymentScreen() {
  const [items, setItems] = useState(mockItems);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PSE');

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (parseInt(item.value) * parseInt(item.quantity)), 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sucursal de Pago</Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.image}</Text>
            <Text>{item.description}</Text>
            <Text>{item.value}</Text>
            <Text>{item.quantity}</Text>
            <Button title="Eliminar" onPress={() => handleDeleteItem(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        style={styles.input}
        placeholder="Dirección de entrega"
        value={address}
        onChangeText={setAddress}
      />

      <Text>Forma de pago</Text>
      <Button title="PSE" onPress={() => setPaymentMethod('PSE')} />
      <Button title="Tarjeta de crédito" onPress={() => setPaymentMethod('Tarjeta de crédito')} />
      <Button title="Efecty" onPress={() => setPaymentMethod('Efecty')} />

      <Text>Total: ${calculateTotal()}</Text>
      <Button title="Finalizar Compra" onPress={() => alert('Compra Finalizada')} />
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
  },
});
