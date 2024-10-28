import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { initMercadoPago, MercadoPago } from '@mercadopago/sdk-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';

initMercadoPago('YOUR_PUBLIC_KEY');

export default function ShoppingCar({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('cartItems');
        if (storedItems) {
          setCartItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Error al cargar los artículos del carrito:', error);
      }
    };
    loadCartItems();
  }, []);

  const handlePayment = async () => {
    try {
      const paymentData = {
        transactionAmount: calculateTotal(), 
        token: 'YOUR_PAYMENT_TOKEN', 
        description: 'Compra en la tienda',
        installments: 1,
        payer: {
          email: 'payer_email@example.com',
        },
      };

      const paymentResult = await MercadoPago.payment.create(paymentData);
      if (paymentResult.status === 'approved') {
        Alert.alert('Pago aprobado', 'Gracias por tu compra!');
      } else {
        Alert.alert('Pago rechazado', 'Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      Alert.alert('Error', 'No se pudo procesar el pago.');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      {cartItems.length === 0 ? (
        <Text>No hay artículos en el carrito.</Text>
      ) : (
        cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        ))
      )}
      <Button title="Pagar" onPress={handlePayment} />
    </View>
  );
}
