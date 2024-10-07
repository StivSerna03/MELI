import React, { useEffect, useReducer } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import styles from '../globalStyles/Styles';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';

const mockOffers = [
  {
    id: '3',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48058396/resize/610/610?1714317290',
    description: 'VULCAN MAX II MECANICO RGB USB - ROCCAT',
    value: '960.000',
    discount: '20%'
  },
  {
    id: '4',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45745892/resize/610/610?1708626083',
    description: 'COMBO / RYZEN 5 8500G + RX VEGA',
    value: '2.600.000',
    discount: '35%'
  },
  {
    id: '5',
    image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51587897/resize/610/610?1723504575',
    description: 'CORE I5 12500 + RTX 3050 - ASUS TUF',
    value: '4.200.000',
    discount: '60%'
  }
];

function offersReducer(state, action) {
  switch (action.type) {
    case 'SET_OFFERS':
      return { ...state, offers: action.payload };
    case 'FILTER_OFFERS':
      return {
        ...state,
        offers: state.offers.filter(offer => offer.discount.replace('%', '') >= action.payload)
      };
    default:
      return state;
  }
}

export default function OffersScreen() {
  const navigation = useNavigation();
  const { addToCart } = useCart();

  const [state, dispatch] = useReducer(offersReducer, { offers: mockOffers });

  useEffect(() => {
    console.log('Cargando ofertas...');
    dispatch({ type: 'SET_OFFERS', payload: mockOffers });
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log('Producto añadido al carrito:', item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas</Text>

      <Button 
        title="Filtrar por descuentos mayores al 30%" 
        onPress={() => dispatch({ type: 'FILTER_OFFERS', payload: 30 })} 
      />

      <FlatList
        data={state.offers}
        renderItem={({ item }) => (
          <View style={styles.offerContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.value}>Valor: ${item.value}</Text>
              <Text style={styles.discount}>Descuento: {item.discount}</Text>
              <Button 
                title="Agregar al carrito" 
                onPress={() => handleAddToCart(item)}
              />
              <Button 
                title="Ver detalles" 
                onPress={() => navigation.navigate('ProductDetails', { product: item })}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
