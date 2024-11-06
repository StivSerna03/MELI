import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { initMercadoPago, MercadoPago, CardForm } from '@mercadopago/sdk-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';
import { getAuth } from 'firebase/auth';


initMercadoPago('APP_USR-901bd3ea-4cf4-4cc1-af50-2c09a5e84ea8'); 

export default function ShoppingCar({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [cardToken, setCardToken] = useState(null);

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

  const handleCardToken = async (token) => {
    setCardToken(token);
    await handlePayment(token);
  };

  const handlePayment = async (token) => {
    const auth = getAuth();
    const user = auth.currentUser;

    const paymentData = {
      transactionAmount: calculateTotal(),
      token: token,
      description: 'Compra en la tienda',
      installments: cartItems.length,
      payer: {
        email: user ? user.email : 'default_email@example.com',
      },
    };

    try {
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
      <CardForm
        onCardToken={handleCardToken}
        onError={(error) => console.error(error)}
      />
      <Button title="Pagar" onPress={() => handlePayment(cardToken)} />
    </View>
  );
}
