import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Button, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../globalStyles/Styles';

const categories = [
  { id: '1', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47464917/resize/610/610?1712433783', name: 'Combos' },
  { id: '2', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36227942/resize/610/610?1686260095', name: 'Teclados' },
  { id: '3', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30269539/resize/610/610?1671118678', name: 'Mouse' },
  { id: '4', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/44755953/resize/610/610?1706041929', name: 'Audífonos' },
  { id: '5', image: 'https://cdnx.jumpseller.com/tienda-gamer-medellin/image/49860348/resize/610/610?1718692541', name: 'Portátiles' },
];

const CategoryItem = ({ category, onPress }) => (
  <Pressable 
    onPress={onPress} 
    style={({ pressed }) => [
      styles.categoryItem,
      { opacity: pressed ? 0.7 : 1 }
    ]}
  >
    <Image source={{ uri: category.image }} style={styles.categoryImage} />
    <Text style={styles.categoryName}>{category.name}</Text>
  </Pressable>
);

export default function CategoryScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleSearch = () => {
    console.log('Búsqueda:', searchQuery);
  };

  const headerItems = [
    { title: "Inicio", route: "Home" },
    { title: "Productos", route: "ProductList" },
    { title: "PQR", route: "PQRScreen" },
    { title: "Ofertas", route: "Offers" },
  ];

  const renderItem = ({ item }) => (
    <CategoryItem 
      category={item} 
      onPress={() => navigation.navigate('ProductList', { category: item.name })} 
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar categorías..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <Button
          title="Menú"
          onPress={toggleMenu}
        />
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {headerItems.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              onPress={() => {
                navigation.navigate(item.route);
                toggleMenu();
              }}
            />
          ))}
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>Categorías</Text>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>

      <View style={styles.footer}>
        <Button
          title="Inicio"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Carrito"
          onPress={() => navigation.navigate('ShoppingCar')}
        />
      </View>
    </View>
  );
}
