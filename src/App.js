import React from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/feature/feature.component";
import Footer from "./components/footer/footer.component";
import Hero from "./components/hero/hero.component";
import { productData, productDataTwo } from "./components/products/data";
import Products from "./components/products/products.component";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData}/>
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
