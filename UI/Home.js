import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };
    loadProducts();
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    navigation.navigate('ProductList', { filteredProducts });
  };

  const headerItems = [
    { title: "Productos", route: "ProductList" },
    { title: "Categorías", route: "Category" },
    { title: "PQR", route: "PQRScreen" },
    { title: "Ofertas", route: "Offers" },
  ];

  const logoUrl = 'https://www.marcaprint.com/blog/wp-content/uploads/2019/07/como-hacer-un-logo-original.png';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar productos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <Button
          title="Menú"
          onPress={toggleMenu}
        />
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {headerItems.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              onPress={() => {
                navigation.navigate(item.route);
                toggleMenu();
              }}
            />
          ))}
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a GamerGG Medellín</Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Perfil"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Carrito"
          onPress={() => navigation.navigate('ShoppingCar')}
        />
      </View>
    </View>
  );
}
