import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../globalStyles/Styles';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = async () => {
    if (username.length === 0 || username.length > 10) {
      Alert.alert('Error', 'El nombre de usuario debe tener entre 1 y 10 caracteres.');
      return;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp();
    }

    if (!auth) {
      console.error('El módulo de autenticación de Firebase no está disponible.');
    } else {
      try {
        await auth().signInWithEmailAndPassword(username, password);
        
        Alert.alert('Bienvenido', 'Inicio de sesión exitoso');
        navigation.navigate('Profile');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        Alert.alert('Error', 'No se pudo completar el inicio de sesión. Verifica tus credenciales.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
    </View>
  );
}
