import React from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../globalStyles/Styles';
import { useCart } from './CartContext';

const ShoppingCartItem = ({ item, onDelete, onChangeQuantity }) => (
  <View style={styles.itemContainer1}>
    <Image source={{ uri: item.imagen }} style={styles.image} />
    <Text>{item.descripcion}</Text>
    <Text>${item.precio}</Text>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={item.quantity.toString()}
      onChangeText={(text) => onChangeQuantity(item.id, parseInt(text) || 1)}
    />
    <Button title="Eliminar" onPress={() => onDelete(item.id)} />
  </View>
);

export default function ShoppingCartScreen() {
  const { cartItems, setCartItems } = useCart();
  const navigation = useNavigation();

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleChangeQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.precio.replace('.', '')) * item.quantity), 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <ShoppingCartItem 
            item={item} 
            onDelete={handleDeleteItem} 
            onChangeQuantity={handleChangeQuantity} 
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <Text>Total: ${calculateTotal().toLocaleString()}</Text>
      <Button title="Pagar" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}
