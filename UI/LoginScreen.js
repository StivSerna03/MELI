import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('JohnCena');
  const [password, setPassword] = useState('Passw0rd!');

  const validateLogin = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    
    if (username.length > 10) {
      Alert.alert('Error', 'El nombre de usuario no puede tener más de 10 caracteres.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'La contraseña debe tener 8 caracteres, incluyendo 1 mayúscula, 1 caracter especial, letras y números.'
      );
      return;
    }

    Alert.alert('Bienvenido', 'Inicio de sesión exitoso');
    navigation.navigate('Home');
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

      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        ¿No tienes cuenta? Regístrate
      </Text>
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  registerText: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
