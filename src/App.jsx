import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import BuyPage from "./components/BuyPage";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const buyNow = (product) => {
    setSelectedProduct(product);
    setCurrentPage("buy");
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="container">
        {currentPage === "home" && (
          <>
            <h2>Our Products</h2>

            <div className="products">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  buyNow={buyNow}
                />
              ))}
            </div>
          </>
        )}

        {currentPage === "cart" && (
          <Cart
            cart={cart}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === "buy" && (
          <BuyPage
            product={selectedProduct}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default App;