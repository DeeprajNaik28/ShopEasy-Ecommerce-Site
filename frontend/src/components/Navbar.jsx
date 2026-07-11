function Navbar({
  search,
  setSearch,
  cartCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <nav className="navbar">
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => setCurrentPage("home")}
      >
        🛒 ShopEasy
      </h2>

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => setCurrentPage("home")}
      >
        Home
      </button>

      <button
        onClick={() => setCurrentPage("cart")}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;