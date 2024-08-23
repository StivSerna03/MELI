import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('JohnCena');
  const [password, setPassword] = useState('Passw0rd!');
  const [email, setEmail] = useState('john.cena@example.com');
  const [birthdate, setBirthdate] = useState('1995-08-15');
  const [address, setAddress] = useState('Calle 123 #45-67');
  const [country, setCountry] = useState('Colombia');
  const [department, setDepartment] = useState('Antioquia');
  const [city, setCity] = useState('Medellín');

  const validateRegistration = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const isValidAge = age >= 18 && age <= 50;

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

    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Ingrese un correo electrónico válido.');
      return;
    }

    if (!isValidAge) {
      Alert.alert('Error', 'No está en el rango de edad para crear la cuenta.');
      return;
    }

    if (address.length > 30) {
      Alert.alert('Error', 'La dirección no puede tener más de 30 caracteres.');
      return;
    }

    Alert.alert('Éxito', 'Usuario registrado con éxito');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

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

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento (YYYY-MM-DD)"
        value={birthdate}
        onChangeText={setBirthdate}
      />

      <TextInput
        style={styles.input}
        placeholder="Dirección"
        maxLength={30}
        value={address}
        onChangeText={setAddress}
      />

      <Picker
        selectedValue={department}
        style={styles.picker}
        onValueChange={(itemValue) => setDepartment(itemValue)}
      >
        <Picker.Item label="Antioquia" value="Antioquia" />
        <Picker.Item label="Cundinamarca" value="Cundinamarca" />
        <Picker.Item label="Cordoba" value="Cordoba" />
        <Picker.Item label="Amazonas" value="Amazonas" />
        <Picker.Item label="Santander" value="Santander" />
      </Picker>

      <Picker
        selectedValue={city}
        style={styles.picker}
        onValueChange={(itemValue) => setCity(itemValue)}
      >
        <Picker.Item label="Medellín" value="Medellín" />
        <Picker.Item label="Envigado" value="Envigado" />
        <Picker.Item label="Itagui" value="Itagui" />
        <Picker.Item label="Bogota" value="Bogota" />
        <Picker.Item label="Sabaneta" value="Sabaneta" />
      </Picker>

      <Button title="Registrar" onPress={validateRegistration} />
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
  picker: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
