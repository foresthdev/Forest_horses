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
    function increaseCartItems(id) {
        
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) { //encuentra los items actuales y si no hay da nulo. 
                return [...currentItems, { id, quantity: 1}] //devuelve todos los articulos seleccionados y los incrementa por 1
            } else {
                return currentItems.map(item => { // mapea los artículos
                    if (item.id === id) {//si hay el artículo
                        return { ...item, quantity: item.quantity +1 }// incrementa por 1 el artículo
                    } else {
                        return item // si no dejalo igual
                    }
                })
            }
        })
    }

    //funcion menguar
    function decreaseCartItems(id) { 
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) { //encuentra los items actuales y si hay uno 
                return currentItems.filter(item => item.id !== id) //devuelve el filtro de los articulos cuando el item no es igual al item entonces se elimina
            } else {
                return currentItems.map(item => { // mapea los artículos
                    if (item.id === id) {//si hay el artículo
                        return { ...item, quantity: item.quantity -1 }// mengua por 1 el artículo
                    } else {
                        return item // si no dejalo igual
                    }
                })
            }
        })
    }

    //funcion eliminar
    function removeFromCart(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id) //devuelve el filtro de los articulos cuando el item no es igual al item entonces se elimina
        })
    }
    return (
        <ShoppingCartContex.Provider value={{ getItemQuantity, increaseCartItems, decreaseCartItems, removeFromCart }}>
            {children}
        </ShoppingCartContex.Provider>
    )
    
} 