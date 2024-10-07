import React, { useState, useEffect, useReducer, useContext, createContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from '../globalStyles/Styles';

const InteractionContext = createContext();

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

function interactionReducer(state, action) {
  switch (action.type) {
    case 'ADD_QUESTION':
      return { ...state, question: action.payload };
    case 'ADD_COMMENT':
      return { ...state, comment: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    default:
      return state;
  }
}

export default function ProductDetailsScreen() {
  const [state, dispatch] = useReducer(interactionReducer, {
    question: '',
    comment: '',
    rating: 0
  });

  let globalRating, setGlobalRating;
  try {
    ({ globalRating, setGlobalRating } = useContext(InteractionContext));
  } catch (error) {
    console.warn('InteractionContext no está disponible');
  }

  useEffect(() => {
    if (state.rating > 0) {
      console.log(`El usuario ha calificado el producto con ${state.rating} estrellas`);
      if (setGlobalRating) {
        setGlobalRating(state.rating);
      }
    }
  }, [state.rating, setGlobalRating]);

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
        value={state.question}
        onChangeText={(text) => dispatch({ type: 'ADD_QUESTION', payload: text })}
      />
      <Button title="Enviar pregunta" onPress={() => alert('Pregunta enviada')} />

      <TextInput
        style={styles.input}
        placeholder="Comentario (máximo 200 caracteres)"
        maxLength={200}
        value={state.comment}
        onChangeText={(text) => dispatch({ type: 'ADD_COMMENT', payload: text })}
      />
      <Text>Calificación:</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="1 Estrella" onPress={() => dispatch({ type: 'SET_RATING', payload: 1 })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="2 Estrellas" onPress={() => dispatch({ type: 'SET_RATING', payload: 2 })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="3 Estrellas" onPress={() => dispatch({ type: 'SET_RATING', payload: 3 })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="4 Estrellas" onPress={() => dispatch({ type: 'SET_RATING', payload: 4 })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="5 Estrellas" onPress={() => dispatch({ type: 'SET_RATING', payload: 5 })} />
      </View>
      
      {state.rating > 0 && <Text>Calificación: {state.rating} estrellas</Text>}
    </View>
  );
}

export function InteractionProvider({ children }) {
  const [globalRating, setGlobalRating] = useState(0);

  return (
    <InteractionContext.Provider value={{ globalRating, setGlobalRating }}>
      {children}
    </InteractionContext.Provider>
  );
}
