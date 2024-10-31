import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';
import auth from '@react-native-firebase/auth'; 

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(''); 
  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('currentUser');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('currentUser');
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const userData = await AsyncStorage.getItem('currentUser');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const headerItems = [
    { title: "Mis Compras", route: "MyPurchases" },
    { title: "Mis Favoritos", route: "MyFavorites" },
  ];

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No has iniciado sesión</Text>
      </View>
    );
  }

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
        <Text style={styles.username}>Usuario: {user.username}</Text>
        <Text style={styles.email}>Correo: {user.email}</Text>
        <Text style={styles.birthDate}>Fecha de nacimiento: {user.birthdate}</Text>
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
