import "./Main.css";
import ProductCard from "../ProductCard/ProductCard";

function Main({ data }) {
  return (
    <div className="main">
      {data.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
}

export default Main;
