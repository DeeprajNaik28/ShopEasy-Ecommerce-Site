import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import BuyPage from "./components/BuyPage";

import {
  PRODUCT_API,
  SEARCH_API,
  CART_API
} from "./config/api";

function App() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [cartCount, setCartCount] = useState(0);

  const [currentPage, setCurrentPage] = useState("home");

  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {

    loadProducts();

    loadCartCount();

  }, []);

  useEffect(() => {

    if (search.trim() === "") {

      loadProducts();

    } else {

      searchProducts();

    }

  }, [search]);



  //---------------- PRODUCTS ----------------//


  const loadProducts = async () => {

    try {

      const res = await axios.get(PRODUCT_API);

      setProducts(res.data);

    } catch (err) {

      console.log(err);

    }

  };



  //---------------- SEARCH ----------------//


  const searchProducts = async () => {

    try {

      const res = await axios.get(

        `${SEARCH_API}?query=${search}`

      );

      setProducts(res.data);

    } catch (err) {

      console.log(err);

    }

  };



  //---------------- CART COUNT ----------------//


  const loadCartCount = async () => {

    try {

      const res = await axios.get(CART_API);

      setCartCount(res.data.length);

    }

    catch (err) {

      console.log(err);

    }

  };



  //---------------- ADD CART ----------------//


  const addToCart = async (product) => {

    try {

      await axios.post(CART_API, {

        productId: product._id,

        name: product.name,

        price: product.price,

        quantity: 1

      });

      alert("Added to Cart");

      loadCartCount();

    }

    catch (err) {

      console.log(err);

    }

  };



  //---------------- BUY NOW ----------------//


  const buyNow = (product) => {

    setCheckoutItems([product]);

    setCurrentPage("buy");

  };



  return (

    <>

      <Navbar

        search={search}

        setSearch={setSearch}

        cartCount={cartCount}

        currentPage={currentPage}

        setCurrentPage={setCurrentPage}

      />



      <div className="container">

        {

          currentPage === "home" &&

          <>

            <h2>Our Products</h2>

            <div className="products">

              {

                products.map((product) => (

                  <ProductCard

                    key={product._id}

                    product={product}

                    addToCart={addToCart}

                    buyNow={buyNow}

                  />

                ))

              }

            </div>

          </>

        }



        {

          currentPage === "cart" &&

          <Cart

            setCurrentPage={setCurrentPage}

            setCheckoutItems={setCheckoutItems}

            loadCartCount={loadCartCount}

          />

        }



        {

          currentPage === "buy" &&

          <BuyPage

            checkoutItems={checkoutItems}

            setCurrentPage={setCurrentPage}

            loadCartCount={loadCartCount}

          />

        }

      </div>

    </>

  );

}

export default App;