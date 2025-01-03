import React, { useState, useEffect } from "react";

export default function FakeApi() {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch multiple items from the fake API
    fetch("https://jsonplaceholder.typicode.com/posts") // Example API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.slice(0, 10)); // Get the first 10 items
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Remove item handler
  const handleRemove = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fake API Products</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id} style={{ marginBottom: "1rem" }}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button onClick={() => handleRemove(item.id)}>Remove Item</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No items to display</div>
      )}
    </div>
  );
}

// 1)varible
// 2)function 
// 3)varible call vs function call 
// 4)defintion vs call 
// 5)how to unserstan the code 
// 6)on the page which is present like function definiton skip that 
// 7)skip the function defition logic on the page if the function will call then only check that 
// ------------------------------------------------------------------------------------------------
// 8)when the page will call the code will run from top to bottom line by line 
// 9)on the page we have two types of code are present
//    a)global code
//    b)local code or function code
// 10)global code will run  defaultly 
// 11)local code will run when we call the function
// 12)functions are defined with the  function keyword 
// 13) function define with the arrow function ()=>{} (arraow function are define with the with the arrow symol=>)
// 14)function will call with the function name globaly by using the methods eg useEffect()
// syntax of javscript for undersrand the codeing
// 1)=
// 2)()
// 3)function
// 4)=>
// 5){} block (it will act block object loop based on the keyword )
// 6)[] array


//we can able to pass the function as a parameter to another function (this is called as callback function)
//we can send the call back function in two ways
//1)function name by define the function defintion on the other place we call that function function with name without brackets 
//2)we can define the function defintion in the function call as a parameter 
//eg useEffect(()=>{console.log("hello")},[])