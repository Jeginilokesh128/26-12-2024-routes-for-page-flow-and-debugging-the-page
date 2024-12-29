import React from 'react'
import { Link ,Outlet} from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <div>
        <button>
          {/* <Link to="/product1">Product 1</Link> this act like absolute path */}
          <Link to="product1">Product 1</Link> 
        </button>   
        <button>
          <Link to="product2">Product 2</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
}


// Where the outlet is present on that time we will not give the (slash to the to attribute)
//if we use / to the to attribute then we will not get the parent child nested route concept

//