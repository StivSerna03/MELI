import { CartProvider } from './UI/CartContext';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <OffersScreen />
        <ProductListScreen />
      </NavigationContainer>
    </CartProvider>
  );
}
