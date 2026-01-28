import { productsData } from "./Assets/Mock.js/mock";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Main data={productsData} />
      <Footer />
    </div>
  );
}

export default App;
