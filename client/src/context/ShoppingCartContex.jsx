import { useState } from "react";
import { createContext, useContext } from "react";

const ShoppingCartContex = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContex)
}

//Nos da los valores q necesitamos y el codigo para renderizar la cesta de la compra
export function ShoppingCartProvider({ children }) {
    //los providers necesitan children y objetos dentro de ellos
    //almacenamos la info de las funciones en el useState
    const [cartItems, setCartItems] = useState([])

    //funcion consigue la cantidad de productos por cantidad
    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0 
        //encuentra el producto seleccionado por id y devuelva por cantidad y si no hay devuelve 0       
    }

    //funcion incrememtar
    
    return (
        <ShoppingCartContex.Provider value={{ getItemQuantity }}>
            {children}
        </ShoppingCartContex.Provider>
    )
    
} 