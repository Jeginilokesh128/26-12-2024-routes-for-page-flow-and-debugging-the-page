import React from "react";
import ProductList33 from "./Dummycomponet"  //-------------> path ./ current project directory  (./ userdefine)
import Box from "@mui/material/Box";  //inbuild

// two type of compoent 1)userdefine  (path .)
//                      2)predefine  ()

// Example array of objects
const data = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description of Product 1",
    category: "Category 1",
    stock: 50,
    rating: 4.5,
    created_at: "2023-12-01",
    updated_at: "2023-12-15",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Description of Product 2",
    category: "Category 2",
    stock: 30,
    rating: 4.0,
    created_at: "2023-12-02",
    updated_at: "2023-12-16",
    isAvailable: false,
  },
  // Add more objects here
];

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h2>{item.name}</h2>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Stock:</strong> {item.stock}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating}
            </p>
            <p>
              <strong>Created At:</strong> {item.created_at}
            </p>
            <p>
              <strong>Updated At:</strong> {item.updated_at}
            </p>
            <p>
              <strong>Available:</strong> {item.isAvailable ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

let dayanamicdata = [
  {
    productId: 1,
    productName: "Item 1",
    productCost: 100,
    details: "Details of Item 1",
    type: "Type A",
    inventory: 50,
    userRating: 4.5,
    addedDate: "2023-12-01",
    modifiedDate: "2023-12-10",
    available: true,
  },
  {
    productId: 2,
    productName: "Item 2",
    productCost: 200,
    details: "Details of Item 2",
    type: "Type B",
    inventory: 30,
    userRating: 4.0,
    addedDate: "2023-12-02",
    modifiedDate: "2023-12-16",
    available: false,
  },
  {
    productId: 3,
    productName: "Item 3",
    productCost: 300,
    details: "Details of Item 3",
    type: "Type C",
    inventory: 20,
    userRating: 3.8,
    addedDate: "2023-12-03",
    modifiedDate: "2023-12-15",
    available: true,
  },
  {
    productId: 4,
    productName: "Item 4",
    productCost: 400,
    details: "Details of Item 4",
    type: "Type D",
    inventory: 10,
    userRating: 4.7,
    addedDate: "2023-12-04",
    modifiedDate: "2023-12-20",
    available: true,
  },
  {
    productId: 5,
    productName: "Item 5",
    productCost: 150,
    details: "Details of Item 5",
    type: "Type E",
    inventory: 35,
    userRating: 3.5,
    addedDate: "2023-12-05",
    modifiedDate: "2023-12-18",
    available: false,
  },
  {
    productId: 6,
    productName: "Item 6",
    productCost: 250,
    details: "Details of Item 6",
    type: "Type F",
    inventory: 40,
    userRating: 4.3,
    addedDate: "2023-12-06",
    modifiedDate: "2023-12-22",
    available: true,
  },
  {
    productId: 7,
    productName: "Item 7",
    productCost: 350,
    details: "Details of Item 7",
    type: "Type G",
    inventory: 25,
    userRating: 4.1,
    addedDate: "2023-12-07",
    modifiedDate: "2023-12-21",
    available: false,
  },
  {
    productId: 8,
    productName: "Item 8",
    productCost: 450,
    details: "Details of Item 8",
    type: "Type H",
    inventory: 15,
    userRating: 4.6,
    addedDate: "2023-12-08",
    modifiedDate: "2023-12-23",
    available: true,
  },
  {
    productId: 9,
    productName: "Item 9",
    productCost: 550,
    details: "Details of Item 9",
    type: "Type I",
    inventory: 5,
    userRating: 4.8,
    addedDate: "2023-12-09",
    modifiedDate: "2023-12-25",
    available: false,
  },
  {
    productId: 10,
    productName: "Item 10",
    productCost: 125,
    details: "Details of Item 10",
    type: "Type J",
    inventory: 60,
    userRating: 3.9,
    addedDate: "2023-12-10",
    modifiedDate: "2023-12-24",
    available: true,
  },
];
let data3=20;


let Dynamicacesskeys=()=>{
  return (
    <div>
      <h1>Product List</h1>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>

      <div>
        {/* {dayanamicdata.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h2>{item.name}</h2>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Stock:</strong> {item.stock}
            </p>
            <p>
              <strong>Rating:</strong> {item.rating}
            </p>
            <p>
              <strong>Created At:</strong> {item.created_at}
            </p>
            <p>
              <strong>Updated At:</strong> {item.updated_at}
            </p>
            <p>
              <strong>Available:</strong> {item.isAvailable ? "Yes" : "No"}
            </p>
          </div>
        ))} */}

        {/* dynamic keys */}
        {dayanamicdata.map((item) => {
          const uniqueKey = item.productId; // Using 'productId' as the unique key
          return (
            <>
              <div
                key={uniqueKey}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px 0",
                  borderRadius: "8px",
                }}
              >
                {Object.keys(item).map((key) => (
                  <p key={key}>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    {item[key]?.toString() || "N/A"}
                  </p>
                ))}
              </div>
              <p>{data3}</p>
            </>
          );
        })}
      </div>
      {/* <ProductList33 jegini={2222} data={data}  data2={details}/> */}
      <ProductList33 jegini={2222} data={data} />
    </div>
  );
}

//call 
//assign (=,:)
 //productCost: 125 (object assingment)
 //varible assign by uisng the equalto symbol


//    key={item.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               margin: "10px 0",
//               borderRadius: "8px",
//             }}

export {Dynamicacesskeys};

//here item is holding every time one elment for evry call
//based on the data we are going to call for acess the values 
//here i call key in the statcic form 
//how to make the key dynamic

// code flow for execution form top to bottom line by line
// for the array and object  key.charAt(0).toUpperCase() + key.slice(1)}(we will travel frpm let to right left is th parent and right is the child)

// i think item[key]  (item and key have function defintion -->but there is no function defintion)


//call parameter 
//defintion 
//componrt
//props
// user define  or pre define
// define means var let const

//if it is user define logic is in our local project 


// dont read the code from the middel from where the block wiil start from tat palce need to sart understand example parametes part