import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = async () => {
    if (username.length === 0 || username.length > 10) {
      Alert.alert('Error', 'El nombre de usuario debe tener entre 1 y 10 caracteres.');
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : {};

      if (!users[username]) {
        Alert.alert('Error', 'Usuario no encontrado');
        return;
      }

      if (users[username].password !== password) {
        Alert.alert('Error', 'Contraseña incorrecta');
        return;
      }

      Alert.alert('Bienvenido', 'Inicio de sesión exitoso');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'No se pudo completar el inicio de sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        maxLength={10}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Iniciar Sesión" onPress={validateLogin} />

      <Text 
        style={styles.registerText} 
        onPress={() => navigation.navigate('Register')}
      >
        ¿No tienes cuenta? Regístrate
      </Text>

      <Text 
        style={styles.registerText} 
        onPress={() => Alert.alert('Recuperar Contraseña', 'Instrucciones enviadas al correo.')}
      >
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
}