import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../globalStyles/Styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GamerGG Medellín</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir al Carrito de Compras" onPress={() => navigation.navigate('ShoppingCar')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a la Lista de Artículos" onPress={() => navigation.navigate('ProductList')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a la Categoría de Artículos" onPress={() => navigation.navigate('Category')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir al Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a Mis Favoritos" onPress={() => navigation.navigate('MyFavorites')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir al Login" onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a PQR" onPress={() => navigation.navigate('PQRScreen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a mis compras" onPress={() => navigation.navigate('MyPurchases')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a ofertas" onPress={() => navigation.navigate('Offers')} />
      </View>
    </View>
  );
}

