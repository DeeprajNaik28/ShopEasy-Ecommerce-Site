function BuyPage({ product, setCurrentPage }) {
  return (
    <div className="buy-page">
      <h2>Checkout</h2>

      <div className="buy-card">
        <h3>{product.name}</h3>

        <p className="buy-price">₹{product.price}</p>

        <button
          className="place-order-btn"
          onClick={() => alert("✅ Order Placed Successfully!")}
        >
          Place Order
        </button>

        <button
          className="back-btn"
          onClick={() => setCurrentPage("home")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default BuyPage;