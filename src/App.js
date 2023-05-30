import './App.css';
// import { signInWithGoogle } from './components/Firebase';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NewsApi from './components/NewsApi';
import Products from './components/Products';
import Login from './components/Login';
import TourPackagePage from './components/TourPackagePage';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
// import { Api } from './components/Api';

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/detail' element={<Detail/>}></Route>
              <Route path='/aboutus' element={<AboutUs/>}></Route>
              <Route path='/news' element={<NewsApi/>}></Route>
              <Route path='/contactus' element={<ContactUs/>}></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products/>} />
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/tourpackage" element={<TourPackagePage/>}></Route>
              <Route path="/registration" element={<Registration/>}></Route>
              <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
            </Routes>
            <Footer/>
          </Router>
        </section>
      </main>
    </div>
  );
}

export default App;
