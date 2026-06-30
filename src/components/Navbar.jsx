function Navbar({
  search,
  setSearch,
  cartCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <nav className="navbar">
      <h1
        className="logo"
        onClick={() => setCurrentPage("home")}
      >
        ShopEasy
      </h1>

      {currentPage === "home" && (
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      <button
        className="cart-btn"
        onClick={() =>
          setCurrentPage(
            currentPage === "home" ? "cart" : "home"
          )
        }
      >
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;