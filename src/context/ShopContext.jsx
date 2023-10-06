/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import useGetProducts from '../hooks/useGetProducts';
import useGetCategories from '../hooks/useGetCategories';

const ShopContext = createContext({
  products: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  productsError: '',
  categories: [],
  categoriesError: '',
});

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { categories, categoriesError } = useGetCategories();
  const { products, productsError } = useGetProducts();
  const [filterHome, setFilterHome] = useState('all');
  const [filterShop, setFilterShop] = useState('all');

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // El producto ya está en el carrito, actualizamos la cantidad
      const updatedCart = cart.map((item, index) => {
        if (index === productIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // El producto no está en el carrito, lo añadimos
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const addQuantity = (product, changedQuantity) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex] = {
        ...updatedCart[productIndex],
        quantity: updatedCart[productIndex].quantity + changedQuantity,
      };

      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  const emptyCart = () => setCart([]);

  const showCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        categories,
        addToCart,
        removeFromCart,
        emptyCart,
        productsError,
        categoriesError,
        filterHome,
        setFilterHome,
        filterShop,
        setFilterShop,
        isCartOpen,
        showCart,
        addQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
