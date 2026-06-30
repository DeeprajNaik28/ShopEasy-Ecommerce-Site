function ProductCard({ product, addToCart, buyNow }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <div className="buttons">
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button
          className="buy-btn"
          onClick={() => buyNow(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;