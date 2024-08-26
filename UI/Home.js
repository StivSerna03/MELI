import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GamerGG Medellín</Text>
      <Button title="Ir al Carrito de Compras" onPress={() => navigation.navigate('ShoppingCar')} />
      <Button title="Ir a la Lista de Artículos" onPress={() => navigation.navigate('ProductList')} />
      <Button title="Ir a la Categoría de Artículos" onPress={() => navigation.navigate('Category')} />
      <Button title="Ir al Perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Ir a Mis Favoritos" onPress={() => navigation.navigate('MyFavorites')} />
      <Button title="Ir al Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
