// import React ,{useEffect,useState}from 'react'

// export default function Home() {
//   const [count, setCount] = useState(1);
//     const [count1, setCount1] = useState(1);
//   // useEffect(()=>{
//   //   console.log(`during mouting time ${count}`);

//   //   return ()=>{
//   //      console.log(`from the inside clean function ${count}`);
//   //   }
//   // })
//   // useEffect(() => {
//   //   console.log(`during mouting time ${count}`);

//   //   return () => {
//   //     console.log(`from the inside clean function ${count}`);
//   //   };
//   // },[]); //no dependency
//   useEffect(() => {
//     console.log(`during mouting time ${count}`);

//     return () => {
//       console.log(`from the inside clean function ${count}`);
//     };
//   }, []); //no dependency

//     useEffect(() => {
//       console.log(`during mouting time count-2 ${count}`);

//       return () => {
//         console.log(`from the inside clean function count-2 ${count}`);
//       };
//     },[count1]); //update the state ouside the use effect

//     //update the state inside the useeffect
//         useEffect(() => {
//           console.log(`during mouting time count-2 ${count}`);

// //  setCount1((pre) => {  if i update the state inside the use effect it is making infinite loop running why
// //             return ++pre;
// //           })
//           return () => {
//             console.log(`from the inside clean function count-2 ${count}`);
//           };
//         }, [count1]);


//   return (
//     <div>
//       <h1>Home</h1>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount((pre) => {
//             return ++pre;
//           });
//         }}
//       >
//         click count-1
//       </button>
//       <button
//         onClick={() => {
//           setCount1((pre) => {
//             return ++pre;
//           });
//         }}
//       >
//         click count-2
//       </button>
//       <h2>{count1}</h2>
//     </div>
//   );
// }

// // https://chatgpt.com/share/67743682-5e64-8006-8325-a79ce7c010c1 (useeffect function chatgpt)

import React ,{useState,memo} from "react";

function Home() {
  console.log("Home Component Rendered!");
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Foodie Hub!
        </h1>
        <p className="text-gray-700 mb-6">
          Discover delicious food from your favorite restaurants, delivered to
          your door.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Order Now
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Fast Delivery
          </h2>
          <p className="text-gray-600">
            Get your order delivered within 30 minutes.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Fresh Ingredients
          </h2>
          <p className="text-gray-600">
            We ensure fresh and high-quality ingredients.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            24/7 Support
          </h2>
          <p className="text-gray-600">
            We're here to help you anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Ready to Order?
        </h2>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">
          Explore Menu
        </button>
      </section>
    </div>
  );
}

export default React.memo(Home);
