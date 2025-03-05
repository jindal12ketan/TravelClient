import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import history from "providers/history";
import { store, persistor } from "providers/store";
import "./App.css";
// import { signInWithGoogle } from './components/Firebase';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NewsApi from "./components/NewsApi";
import Products from "./components/Products";
import Login from "./components/Login";
import TourPackagePage from "./components/TourPackagePage";
import Registration from "./components/Registration";
import ForgotPassword from "./components/ForgotPassword";
import Checkout from "./components/Checkout";
// import { Api } from './components/Api';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <Router history={history}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/detail" element={<Detail />}></Route>
              <Route path="/aboutus" element={<AboutUs />}></Route>
              <Route path="/news" element={<NewsApi />}></Route>
              <Route path="/contactus" element={<ContactUs />}></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/tourpackage" element={<TourPackagePage />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route
                path="/forgotPassword"
                element={<ForgotPassword />}
              ></Route>
              {/* <Route path="/checkout" element={<Checkout />}></Route> */}
            </Routes>
            <Footer />
          </Router>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
