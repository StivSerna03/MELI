import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../globalStyles/Styles';

const navigationItems = [
  { title: "Ir al Carrito de Compras", route: "ShoppingCar" },
  { title: "Ir a la Lista de Artículos", route: "ProductList" },
  { title: "Ir a la Categoría de Artículos", route: "Category" },
  { title: "Ir al Perfil", route: "Profile" },
  { title: "Ir a Mis Favoritos", route: "MyFavorites" },
  { title: "Ir al Login", route: "Login" },
  { title: "Ir a PQR", route: "PQRScreen" },
  { title: "Ir a mis compras", route: "MyPurchases" },
  { title: "Ir a ofertas", route: "Offers" },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a GamerGG Medellín</Text>
      {navigationItems.map((item, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button 
            title={item.title} 
            onPress={() => navigation.navigate(item.route)} 
          />
        </View>
      ))}
    </View>
  );
}