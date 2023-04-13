const Cart = () => {

    const cartElements = [
      {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
      },
      {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
      },
      {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
      }
    ];
  
    const totalPrice = cartElements.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
    const removeCartItem = (index) => {
      const updatedCart = [...cartElements];
      updatedCart.splice(index, 1);
      // TODO: update cart in state
    };
  
    return (
      <div className="cart-container">
        <FaShoppingCart className="cart-icon" />
        <div className="cart-items">
          <h3 className="cart-title">Cart</h3>
          {cartElements.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">{item.price} INR</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <button className="cart-remove-btn" onClick={() => removeCartItem(index)}>Remove</button>
              </div>
            </div>
          ))}
          <p className="cart-total-price">Total Price: {totalPrice} INR</p>
        </div>
      </div>
    );
  }
  
  export default Cart;
  const productsContainer = document.getElementById('products-container');

  productsArr.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    `;
    productsContainer.appendChild(productElement);
  });