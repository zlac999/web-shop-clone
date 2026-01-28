import img from "../Assets/Picture/Hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src={img} alt="Fashion picture" />

      <div className="hero-content">
        <h2>
          Refresh Your <br /> Wardrobe
        </h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
