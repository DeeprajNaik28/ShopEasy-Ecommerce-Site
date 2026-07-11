import { useEffect, useState } from "react";
import axios from "axios";
import { CART_API } from "../config/api";

function Cart({
  setCurrentPage,
  setCheckoutItems,
  loadCartCount,
}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await axios.get(CART_API);
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`${CART_API}/${id}`);

      loadCart();

      if (loadCartCount) {
        loadCartCount();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setCheckoutItems(cart);
    setCurrentPage("buy");
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item._id}>
              <div>
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <p>Quantity: {item.quantity}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button
            className="buy-btn"
            onClick={checkout}
          >
            Proceed to Checkout
          </button>
        </>
      )}

      <br />

      <button
        className="back-btn"
        onClick={() => setCurrentPage("home")}
      >
        ← Continue Shopping
      </button>
    </div>
  );
}

export default Cart;