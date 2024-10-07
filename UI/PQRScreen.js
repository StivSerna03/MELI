import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PQRScreen() {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (requestType === '') {
      Alert.alert('Error', 'Por favor, selecciona un tipo de solicitud.');
      return;
    }

    if (description.length === 0) {
      Alert.alert('Error', 'Por favor, completa la descripción de la solicitud.');
      return;
    }

    if (description.length > 300) {
      Alert.alert('Error', 'La descripción no puede tener más de 300 caracteres.');
      return;
    }

    Alert.alert('Éxito', 'Solicitud enviada con éxito');
    setRequestType('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda y Soporte</Text>

      <Text style={styles.label}>Tipo de solicitud</Text>
      <Picker
        selectedValue={requestType}
        style={styles.picker}
        onValueChange={(itemValue) => setRequestType(itemValue)}
      >
        <Picker.Item label="Seleccione una opción" value="" />
        <Picker.Item label="Queja" value="complaint" />
        <Picker.Item label="Petición" value="request" />
        <Picker.Item label="Recurso" value="appeal" />
      </Picker>

      <Text style={styles.label}>Descripción de la solicitud</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí tu solicitud..."
        multiline
        numberOfLines={5}
        maxLength={300}
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
});