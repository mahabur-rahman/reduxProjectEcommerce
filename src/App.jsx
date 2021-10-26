// sass
import "./style.scss";
// components
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
// component
import AllProducts from "./components/Products/AllProducts/AllProducts";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
// footer
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/single-item/:id" component={SingleItem} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
