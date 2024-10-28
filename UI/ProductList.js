import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';

export default function ProductList({ navigation, route }) {
  const [menuVisible, setMenuVisible] = useState(false);
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

  useEffect(() => {
    if (route.params?.filteredProducts) {
      setProducts(route.params.filteredProducts);
    }
  }, [route.params?.filteredProducts]);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const headerItems = [
    { title: "Inicio", route: "Home" },
    { title: "Categorías", route: "Category" },
    { title: "PQR", route: "PQRScreen" },
    { title: "Ofertas", route: "Offers" },
  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Button
        title="Ver detalles"
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {headerItems.map((item, index) => (
          <Button
            key={index}
            title={item.title}
            onPress={() => navigation.navigate(item.route)}
          />
        ))}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Lista de Productos</Text>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={styles.footer}>
        <Button
          title="Inicio"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Carrito"
          onPress={() => navigation.navigate('ShoppingCar')}
        />
      </View>
    </View>
  );
}
