export const cart = []; /* export is used to export this variable to use it. This variable can be accessed where import is written like this => import {cart} from '../data/cart.js' -> basically it;s path */

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