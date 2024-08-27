import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from '../globalStyles/Styles';

const mockProduct = {
  id: '1',
  image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/43714526/resize/610/610?1702962685',
  description: 'CORE I5 1235U + INTEL IRIS GRAPHICS - ASUS VIVO',
  value: '2.100.000',
  characteristics: 'Procesador INTEL CORE I5 1235U / 4 Nucleos - 8 Hilos 4,3Ghz'+
  '8gbs en Memoria Ram DDR4'+
  'Graficos Intel Iris XE'+
  'Pantalla 60Hz / FHD de 15,6" Pulgadas - 1080P'+
  '512gbs Estado Solido PCIe Express NVme',
  paymentMethods: ['PSE', 'Tarjeta de crédito', 'Efecty']
};

export default function ProductDetailsScreen() {
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <Image source={{ uri: mockProduct.image }} style={styles.image} />
      <Text>{mockProduct.description}</Text>
      <Text>Valor: {mockProduct.value}</Text>
      <Text>Características: {mockProduct.characteristics}</Text>
      <Text>Medios de pago aceptados: {mockProduct.paymentMethods.join(', ')}</Text>

      <TextInput
        style={styles.input}
        placeholder="Pregunta al vendedor (máximo 100 caracteres)"
        maxLength={100}
        value={question}
        onChangeText={setQuestion}
      />
      <Button title="Enviar pregunta" onPress={() => alert('Pregunta enviada')} />

      <TextInput
        style={styles.input}
        placeholder="Comentario (máximo 200 caracteres)"
        maxLength={200}
        value={comment}
        onChangeText={setComment}
      />
      <Text>Calificación:</Text>
      <View style={styles.buttonContainer}>
      <Button title="1 Estrella" onPress={() => setRating(1)} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="2 Estrellas" onPress={() => setRating(2)} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="3 Estrellas" onPress={() => setRating(3)} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="4 Estrellas" onPress={() => setRating(4)} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="5 Estrellas" onPress={() => setRating(5)} />
      </View>
      {rating > 0 && <Text>Calificación: {rating} estrellas</Text>}
    </View>
  );
}