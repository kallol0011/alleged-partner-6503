export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const CART_PRODUCTS = "CART_PRODUCTS";
export const REMOVE_DATA_FROM_CART = 'REMOVE_DATA_FROM_CART';
export const INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY';
export const DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';


        //* all products 
export const allProducts = (data) => ({
    type: ALL_PRODUCTS,
    payload: data
});

        //* add to cart
export const addToCart = (data) => ({
    type: CART_PRODUCTS,
    payload: data
});

        //* increase quantity
export const increaseCartQuantity = () => ({
    type: INCREASE_CART_QUANTITY

});

        //* decrease quantity
export const decreaseCartQuantity = () => ({
    type: DECREASE_CART_QUANTITY,
    
});


        //* remove item from cart
export const removeDataFromCart = () => ({
    type: REMOVE_DATA_FROM_CART,
    
});



        //* remove All item from cart
export const deleteAllFromCart = () => ({
    type: REMOVE_ALL_FROM_CART,
});


 