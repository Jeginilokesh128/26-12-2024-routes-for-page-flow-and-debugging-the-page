// // // import React,{useState,useEffect,lazy} from 'react';
// // // import './App.css';
// // // import {  Routes, Route, Link } from "react-router-dom";
// // // import Home from "./Home";
// // // import Contact from "./Contact";
// // // import Detail from './detail';
// // // import Navbar from './navbar';
// // // import  Products  from "./Products";
// // // import Products1 from "./product1";
// // // import Products2 from "./product2";
// // // import FakeApi from './fakeapi';
// // // import ProductList from './objectstructure';
// // // import { Dynamicacesskeys } from "./objectstructure";
// // // import  Usestatedata  from "./useEffectconcept";
// // // // import CircularProgress from "./loader"
// // // const CircularProgress = React.lazy(() => import("./loader"));

// // // function App() {

// // //   return (
// // //     <div className="App">
// // //       <Navbar />
// // //       <Usestatedata />
// // //       {/* <CircularProgress /> */}
// // //       {setTimeout(() => {
// // //         <CircularProgress />;
// // //       }, 0)}

// // //       <button>
// // //         {/* <Link to="/product1">Product 1</Link> this act like absolute path */}
// // //         <Link to="product1">Product 1</Link>
// // //       </button>
// // //       <button>
// // //         <Link to="product2">Product 2</Link>
// // //       </button>

// // //       <Routes>
// // //         <Route path="/home" element={<Home />} />
// // //         <Route path="/contact" element={<Contact />} />
// // //         <Route path="details" element={<Detail />} />
// // //         {/* <Route path="products" element={<Products />} /> */}
// // //         <Route path="/products" element={<Products />}>
// // //           <Route path="product1" element={<Products1 />} />
// // //           <Route path="product2" element={<Products2 />} />
// // //         </Route>
// // //       </Routes>
// // //     </div>
// // //   );
// // // }
// // // // products / product1;
// // // export default App;

// // // // Routes -section
// // // // Route  -element

// // // // http://localhost:3000/details =url

// // // // when (url=path )

// // // // when we use slash
// // // // on the path or
// // // // to atrtibute

// // import React, { useState, useEffect, Suspense, lazy } from "react";
// // import Home from "./useEffectdata";
// // const CircularProgress = lazy(() => import("./loader"));

// // function App() {
// //   const [showLoader, setShowLoader] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowLoader(true);
// //     }, 20000); // Set delay as needed

// //     return () => clearTimeout(timer); // Cleanup timer on unmount
// //   }, []);

// //   return (
// //     <div>
// //       {/* {showLoader ? (
// //         <Suspense fallback={<div>Loading...</div>}>
// //           <CircularProgress />
// //         </Suspense>
// //       ) : (
// //         <div>Content before loader...</div>
// //       )} */}
// //       <Home/>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import Home from "./Home";
// import Product1 from "./product1";

// function MultiStateCounter() {
//   // 🟢 Define 5 different state variables
//   const [count, setCount] = useState(0); // Standard counter
//   const [score, setScore] = useState(10); // Score counter
//   const [toggle, setToggle] = useState(false); // Boolean toggle
//   const [name, setName] = useState("Lokesh"); // String state
//   const [items, setItems] = useState([]); // Array state

//   console.log("Component Rendered!");

//   return (
//     <div>
//       <h2>Multi-State Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>{" "}
//       {/* Increment by 1 */}
//       <p>Score: {score}</p>
//       <button onClick={() => setScore((prevScore) => prevScore + 5)}>
//         Add 5 to Score
//       </button>{" "}
//       {/* Increment by 5 */}
//       <p>Toggle: {toggle ? "ON" : "OFF"}</p>
//       <button onClick={() => setToggle(!toggle)}>Toggle ON/OFF</button>{" "}
//       {/* Toggle true/false */}
//       <p>Name: {name}</p>
//       <button onClick={() => setName(name === "Lokesh" ? "Jegini" : "Lokesh")}>
//         Change Name
//       </button>{" "}
//       {/* Toggle name */}
//       <p>Items: {items.join(", ") || "No items yet"}</p>
//       <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
//         Add Item
//       </button>{" "}
//       {/* Add to array */}
//       <Home />
//       <Product1 />
//     </div>
//   );
// }

// export default MultiStateCounter;
//22-03-2025
// import React from "react";

// const App = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to My App</h1>
//       <p className="text-lg text-gray-600 mt-2">
//         This is a simple React component.
//       </p>
//     </div>
//   );
// };

// export default App;
// import Card from "./Card";

// const App = () => {
//   return (
//     <Card
//       title="Sample Card"
//       description="This is a sample card description."
//       //  childfunction={()=>{}}
//       childfunction={() => {
//         alert("Hello");
//       }}
//     />
//   );
// };

// export default App;

//sending the function defintion as a props to the child component int eh two ways
//1. directly sending the function defintion to the child component with out any variable name -- this is not reusuable
//2. sending the function defintion to the child component with the help of the variable name (define separately) -- this is reusuable

// Your code is incorrect because HTML elements do not have an attribute called childfunction, and React does not support adding event handlers like this directly to an h1 tag.
// Use onClick instead of a custom attribute (childfunction) – React has predefined event handlers like onClick, onChange, etc.
//     <h1
//       childfunction={() => {
//         alert("Hello");
//       }}
//     >
//       function call{" "}
//     </h1>;





import React, { useState } from "react";
let staticKey = 0;
const StateResetComponent = () => {
  const [key, setKey] = useState(1);
  // const [staticKey, setStaticKey] = useState(0); // Store staticKey in state

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid black",
        borderRadius: "5px",
      }}
    >
      <h2>State Reset Component</h2>

      {/* State Key Button */}
      <button onClick={() => setKey(key + 1)}>
        Reset Appkey Component (State Key)
      </button>

      {/* Static Key Button */}
      {/* <button onClick={() => setStaticKey(staticKey + 1)}>
        StaticKey Reset Appkey Component
      </button>
       */}

      <button
        onClick={() => {
          staticKey = staticKey + 1;
          console.log("staticKey", staticKey);
        }}
      >
        staticKey Reset Appkey Component
      </button>

      {/* Components with Different Keys */}
      <Appkey
        key={key*1}
        keyProp={key}
        heading="State Key Component duplicate vlaue for the key same vlaue for the second key which allredy used for the first one"
      />

      <Appkey key={key*2} keyProp={key} heading="State Key Component" />
      {/* <Appkey
        key={staticKey}
        keyProp={staticKey}
        heading="Static Key Component"
      /> */}
      {/* <Appkey
        key={staticKey}
        keyProp={staticKey}
        heading="Static Key Component"
      /> */}
    </div>
  );
};

const Appkey = ({keyProp, heading }) => {
  const [count, setCount] = useState(4);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "2px solid blue",
        borderRadius: "5px",
      }}
    >
      <h2>{heading}</h2>
      <p>Key: {keyProp}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StateResetComponent;
