import { productsData } from "./Components/Mock/mock";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Header />
      <Hero img="/Hero.jpg" />
      <Main data={productsData} />
      <Footer />
    </div>
  );
}

export default App;
