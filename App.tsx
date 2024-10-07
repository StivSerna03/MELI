import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './UI/LoginScreen';
import RegisterScreen from './UI/RegisterScreen';
import Home from './UI/Home';
import PaymentScreen from './UI/PaymentScreen';
import ProductListScreen from './UI/ProductListScreen';
import ProductDetailsScreen from './UI/ProductDetailsScreen';
import CategoryScreen from './UI/CategoryScreen';
import ShoppingCar from './UI/ShoppingCar';
import MyPurchases from './UI/MyPurchases';
import MyFavoritesScreen from './UI/MyFavoritesScreen';
import OffersScreen from './UI/OffersScreen';
import ProfileScreen from './UI/ProfileScreen';
import PQRScreen from './UI/PQRScreen';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { CartProvider } from './UI/CartContext'; 

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="ShoppingCar" component={ShoppingCar} />
          <Stack.Screen name="MyPurchases" component={MyPurchases} />
          <Stack.Screen name="MyFavorites" component={MyFavoritesScreen} />
          <Stack.Screen name="Offers" component={OffersScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="PQRScreen" component={PQRScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

