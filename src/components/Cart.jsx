function Cart({ cart, setCurrentPage }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name}</span>

              <span>₹{item.price}</span>
            </div>
          ))}

          <h3 className="total">
            Total: ₹{total}
          </h3>
        </>
      )}

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