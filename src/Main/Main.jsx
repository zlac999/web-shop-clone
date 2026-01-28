import "./Main.css";

function Main({ data }) {
  return (
    <div className="main">
      {data.map((item) => (
        <div className={`product-card ${!item.inStock ? "out-of-stock" : ""}`}>
          {item.isNew && <span className="badge new">New</span>}
          {item.isOnSale && <span className="badge sale">Sale</span>}
          <img className="product-img" src={item.image} />
          <p>
            <strong>Product:</strong> {item.name}
          </p>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Price:</strong> {item.price} €
          </p>
          {item.inStock ? (
            <button className="add-btn">Add To Cart</button>
          ) : (
            <button className="out-btn" disabled>
              Out of Stock
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Main;
