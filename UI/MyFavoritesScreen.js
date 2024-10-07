import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';

export default function MyFavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
    });

    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error al cargar favoritos:', error);
    }
  };

  const removeFromFavorites = async (productId) => {
    try {
      const updatedFavorites = favorites.filter(fav => fav.id !== productId);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>

      {favorites.length === 0 ? (
        <Text style={styles.loading}>No tienes productos favoritos</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.favoriteContainer}>
              <Image source={{ uri: item.imagen }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.description}>{item.descripcion}</Text>
                <Text style={styles.status}>Precio: {item.precio}</Text>
                <Button 
                  title="Ver producto" 
                  onPress={() => navigation.navigate('ProductList', { productId: item.id })} 
                />
                <Button 
                  title="Eliminar de favoritos" 
                  onPress={() => removeFromFavorites(item.id)} 
                />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
