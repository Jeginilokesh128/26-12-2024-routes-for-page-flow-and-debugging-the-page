import React from 'react'
import { Link} from "react-router-dom";

export default function product1() {
  return (
    <div>
      <h1>Product 1</h1>
      <li>
        <Link to="/home">Home</Link>
      </li>
    </div>
  );
}
