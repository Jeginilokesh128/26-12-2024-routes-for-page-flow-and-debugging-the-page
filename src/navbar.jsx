import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="details">Details</Link>
            </li>
            <li>
              <Link to="products">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

// paths are two tpes 
// 1)absolute  (/)(s-fro slash)
// 2_relative ()

// nested routes routes
