import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import styles from '../globalStyles/Styles';

const mockItems = [
  {
    id: '1',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45745892/resize/610/610?1708626083',
    description: 'COMBO / RYZEN 5 8500G + RX VEGA',
    value: '2.600.000',
    quantity: '1'
  },
  {
    id: '2',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000',
    quantity: '1'
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
    return items.reduce((total, item) => total + (parseInt(item.value) * parseInt(item.value)), 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sucursal de Pago</Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer1}>
            <Image source={{ uri: item.image }} style={styles.image} />
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
      <View style={styles.buttonContainer}>
      <Button title="PSE" onPress={() => setPaymentMethod('PSE')} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Tarjeta de crédito" onPress={() => setPaymentMethod('Tarjeta de crédito')} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Efecty" onPress={() => setPaymentMethod('Efecty')} />
      </View>

      <Text>Total: ${calculateTotal()}</Text>
      <Button title="Finalizar Compra" onPress={() => alert('Compra Finalizada')} />
    </View>
  );
}