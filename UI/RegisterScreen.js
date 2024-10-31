import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../globalStyles/Styles';
import auth from '@react-native-firebase/auth'; 

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');

  const validateRegistration = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.length === 0 || username.length > 10) {
      Alert.alert('Error', 'El nombre de usuario debe tener entre 1 y 10 caracteres.');
      return false;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'La contraseña debe tener 8 caracteres, incluyendo 1 mayúscula, 1 caracter especial, letras y números.'
      );
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, ingresa un email válido');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (validateRegistration()) {
      try {
        const existingUsers = await AsyncStorage.getItem('users');
        const users = existingUsers ? JSON.parse(existingUsers) : {};

        if (users[username]) {
          Alert.alert('Error', 'Este nombre de usuario ya está registrado');
          return;
        }

        await auth().createUserWithEmailAndPassword(email, password)
          .then(async (userCredential) => {
            const newUser = { 
              username, 
              email, 
              birthdate, 
              address, 
              country, 
              department, 
              city 
            };
            users[username] = newUser;
            await AsyncStorage.setItem('users', JSON.stringify(users));
            await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));

            Alert.alert('Éxito', 'Usuario registrado correctamente');
            navigation.navigate('Profile');
          })
          .catch((error) => {
            const errorMessage = error.message;
            Alert.alert('Error', errorMessage);
          });
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        Alert.alert('Error', 'No se pudo completar el registro');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="País"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        style={styles.input}
        placeholder="Departamento"
        value={department}
        onChangeText={setDepartment}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
      />

      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
}
