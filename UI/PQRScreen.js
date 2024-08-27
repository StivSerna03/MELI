import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PQRScreen() {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (requestType === '' || description.length === 0) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
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
  label: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  picker: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});
