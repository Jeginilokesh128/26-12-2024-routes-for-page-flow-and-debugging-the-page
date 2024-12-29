import logo from './logo.svg';
import './App.css';
import {  Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Detail from './detail';
import Navbar from './navbar';
import  Products  from "./Products";
import Products1 from "./product1";
import Products2 from "./product2";
import FakeApi from './fakeapi';
import ProductList from './objectstructure';
import { Dynamicacesskeys } from "./objectstructure";

function App() {
 
  return (
    <div className="App">
      <Navbar />

      <button>
        {/* <Link to="/product1">Product 1</Link> this act like absolute path */}
        <Link to="product1">Product 1</Link>
      </button>
      <button>
        <Link to="product2">Product 2</Link>
      </button>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="details" element={<Detail />} />
        {/* <Route path="products" element={<Products />} /> */}
        <Route path="/products" element={<Products />}>
          <Route path="product1" element={<Products1 />} />
          <Route path="product2" element={<Products2 />} />
        </Route>
      </Routes>
    </div>
  );
}
// products / product1;
export default App;



// Routes -section
// Route  -element 


// http://localhost:3000/details =url 

// when (url=path )

// when we use slash 
// on the path or 
// to atrtibute

