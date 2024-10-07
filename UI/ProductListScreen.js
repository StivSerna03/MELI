import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';
import { useCart } from './CartContext';

const productos = [
  {
    id: '1',
    imagen: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/26445972/resize/610/610?1672738540',
    descripcion: 'DEATHADDER V2 SPECIAL RGB - RAZER',
    precio: '280.000'
  },
  {
    id: '2',
    imagen: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36230972/resize/610/610?1704274014',
    descripcion: 'BARRACUDA X QUARTZ ROSA INALAMBRICAS - RAZER',
    precio: '540.000'
  },
  {
    id: '3',
    imagen: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    descripcion: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    precio: '960.000'
  },
  {
    id: '4',
    imagen: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45745892/resize/610/610?1708626083',
    descripcion: 'COMBO / RYZEN 5 8500G + RX VEGA',
    precio: '2.600.000'
  },
  {
    id: '5',
    imagen: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    descripcion: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    precio: '4.200.000'
  }
];

export default function ProductListScreen({ route, navigation }) {
  const [search, setSearch] = useState('');
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(productos);

  useEffect(() => {
    if (route.params?.productId) {
      const product = productos.find(p => p.id === route.params.productId);
      if (product) {
        setFilteredProducts([product]);
      }
    } else {
      setFilteredProducts(productos);
    }
  }, [route.params?.productId]);

  useEffect(() => {
    const results = productos.filter(product => 
      product.descripcion.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  }, [search]);

  const addToFavorites = async (product) => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      let favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
      
      if (!favorites.some(fav => fav.id === product.id)) {
        favorites.push(product);
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        Alert.alert('Éxito', 'Producto añadido a favoritos');
      } else {
        Alert.alert('Información', 'Este producto ya está en tus favoritos');
      }
    } catch (error) {
      console.error('Error al añadir a favoritos:', error);
      Alert.alert('Error', 'No se pudo añadir el producto a favoritos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar productos"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text>{item.descripcion}</Text>
              <Text>{item.precio}</Text>
              <Button 
                title="Agregar al carrito" 
                onPress={() => addToCart(item)}
              />
              <Button 
                title="Ver detalles" 
                onPress={() => navigation.navigate('ProductDetails', { product: item })}
              />
              <Button 
                title="Añadir a favoritos" 
                onPress={() => addToFavorites(item)}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
