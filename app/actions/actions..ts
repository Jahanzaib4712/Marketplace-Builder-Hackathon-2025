import { Helicopter } from "../types";


export const addToCart = (helicopter : Helicopter) => {
    const cart : Helicopter[] = JSON.parse(localStorage.getItem("cart") || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === helicopter._id)


    if(existingProductIndex > -1){
        cart[existingProductIndex].stockLevel += 1 
    }
    else{
        cart.push({
            ...helicopter, stockLevel :  1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (helicopterId : string) => {
    let cart : Helicopter[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== helicopterId )
    localStorage.setItem('cart', JSON.stringify(cart))

}

export const updateCartQuantity = (productId : string , quantity : number) => {
    const cart : Helicopter[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if ( productIndex > -1) {
        cart[productIndex].stockLevel = quantity
    }

}


export const getCartItems = () : Helicopter[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}