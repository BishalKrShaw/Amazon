export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    },
]; /* export is used to export this variable to use it. This variable can be accessed where import is written like this => import {cart} from '../data/cart.js' -> basically it;s path */

export function addToCart(productId) {
    let matchingItem;

        cart.forEach((cartItem) => {
            if(productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if(matchingItem) {
            matchingItem.quantity += 1;
        } else{
            cart.push(
                {
                    productId: productId,
                    quantity: 1,
                },
            );
        }
}