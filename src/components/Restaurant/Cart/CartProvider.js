import CartContext from "./cart-contex"


const CartProvider = props => { 
    const addItemToCartHandler =(item) =>{};

    const removeItemFromCartHandler =(id) =>{};

    const CartContext ={
        items:[],
        totolAmount:0,
        addItem:addItemToCartHandler ,
        reemoveItem:removeItemFromCartHandler
    }
    return (
    <CartContext.Provider value = {CartContext}>
        {props.children}
    </CartContext.Provider>
    );
}

export default CartProvider