import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_bunner from "./Components/Assets/banner_mens.png";
import women_bunner from "./Components/Assets/banner_women.png";
import kids_bunner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory bunner={men_bunner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory bunner={women_bunner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory bunner={kids_bunner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
