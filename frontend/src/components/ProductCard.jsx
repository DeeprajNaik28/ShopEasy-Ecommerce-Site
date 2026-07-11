function ProductCard({
  product,
  addToCart,
  buyNow,
}) {
  return (
    <div className="product-card">

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>

      <div className="button-group">

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
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