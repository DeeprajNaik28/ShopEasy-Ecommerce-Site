import { useState } from "react";
import axios from "axios";

import {
  ORDER_API,
  PAYMENT_API,
  CART_API,
} from "../config/api";

function BuyPage({
  checkoutItems,
  setCurrentPage,
  loadCartCount,
}) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    if (!customerName || !phone || !address) {
      alert("Please fill all details.");
      return;
    }

    try {
      // Create Order
      const orderRes = await axios.post(ORDER_API, {
        customerName,
        phone,
        address,
        items: checkoutItems,
        totalAmount: total,
        paymentStatus: "Pending",
      });

      // Process Payment
      await axios.post(PAYMENT_API, {
        orderId: orderRes.data._id,
        amount: total,
        paymentMethod: "Cash On Delivery",
      });

      // Remove purchased items from Cart Service
      for (const item of checkoutItems) {
        if (item._id) {
          try {
            await axios.delete(`${CART_API}/${item._id}`);
          } catch (err) {
            console.log(err);
          }
        }
      }

      if (loadCartCount) {
        loadCartCount();
      }

      alert("✅ Order Placed Successfully!");

      setCurrentPage("home");
    } catch (err) {
      console.log(err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="buy-page">
      <h2>Checkout</h2>

      <h3>Order Summary</h3>

      {checkoutItems.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        checkoutItems.map((item) => (
          <div
            key={item._id || item.productId}
            className="cart-item"
          >
            <div>
              <h4>{item.name}</h4>

              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>
          </div>
        ))
      )}

      <h2>Total : ₹{total}</h2>

      <br />

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <textarea
        rows="4"
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />
      <br />

      <button
        className="buy-btn"
        onClick={placeOrder}
      >
        Place Order
      </button>

      <br />
      <br />

      <button
        className="back-btn"
        onClick={() => setCurrentPage("home")}
      >
        Cancel
      </button>
    </div>
  );
}

export default BuyPage;