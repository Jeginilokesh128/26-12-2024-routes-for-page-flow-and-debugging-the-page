import React ,{useEffect,useState}from 'react'

export default function Usestatedata() {
  const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(1);
  // useEffect(()=>{
  //   console.log(during mouting time ${count});

  //   return ()=>{
  //      console.log(from the inside clean function ${count});
  //   }
  // })
  // useEffect(() => {
  //   console.log(during mouting time ${count});

  //   return () => {
  //     console.log(from the inside clean function ${count});
  //   };
  // },[]); //no dependency
  useEffect(() => {
    console.log(`during mouting time ${count}`);

    return () => {
      console.log(`from the inside clean function ${count}`);
    };
  }, []); //no dependency

    useEffect(() => {
      console.log(`during mouting time count-2 ${count}`);

      return () => {
        console.log(`from the inside clean function count-2 ${count}`);
      };
    },[count1]); //update the state ouside the use effect

    //update the state inside the useeffect
        useEffect(() => {
          console.log(`during mouting time count-2 ${count}`);

//  setCount1((pre) => {  if i update the state inside the use effect it is making infinite loop running why
//             return ++pre;
//           })
          return () => {
            console.log(`from the inside clean function count-2 ${count}`);
          };
        }, [count1]);


  return (
    // <div>
    //   <h1>Home</h1>
    //   <h1>{count}</h1>
    //   <button
    //     onClick={() => {
    //       setCount((pre) => {
    //         return ++pre;
    //       });
    //     }}
    //   >
    //     click count-1
    //   </button>
    //   <button
    //     onClick={() => {
    //       setCount1((pre) => {
    //         return ++pre;
    //       });
    //     }}
    //   >
    //     click count-2
    //   </button>
    //   <h2>{count1}</h2>
    // </div>
    <h1>use state</h1>
  );
}
