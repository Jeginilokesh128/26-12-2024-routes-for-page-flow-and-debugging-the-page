// import React from "react";
// import Child from "./Child";

// const Parent = () => {
//   return (
//     <div>
//       <h1>I'm the parent component</h1>
//       <Child name="React Dev" />
//     </div>
//   );
// };

// export default Parent;


// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [message, setMessage] = useState("No message yet");



//   return (
//     <div>
//       <h1>I'm the parent component</h1>
//       <p>Message from child: {message}</p>
//       <button onClick={ (newMsg) => {
//     setMessage(newMsg);
//   }}>
//         Send Message to Parent
//       </button>
//       <Child name="React Dev" />
//     </div>
//   );
// };

// export default Parent;







//note 1)re redner will not reset the state of the child component  to the defaulr vlaues
// 2)if the child componet is holding the vlaue with the normal js variable it is going to reset to the defaule vlaues
//render
//re render
//rest
//use--means hook
//useMemo--() it will call the function and return the value of the function wile render with out any event 
//useCallback--() it will call the function and return the value of the function wile render with event to call a function

//(react.memo will not rerender if the id dont have function defintion prop vlaue)








import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

     const increment1 = useCallback(() => {
    setCount1((prev) => prev + 1);
     }, []);
    //   const increment2 = useCallback(() => {
    //     setCount2((prev) => prev + 1);
    //   }, []);

             const increment2 = useMemo(() => {
               return 2000+count1;
            ;
             }, [count1]);
  return (
    <div>
      <h1>React Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment parent</button>
      <Child
        countvalue={count1}
        click1={increment1}
        click2={increment2}
        // key={count + 2}
         key={count2 + 2}
      />
      <h1>{increment2}increment2</h1>
    </div>
  );
} 

export default CounterComponent;

// [],{},()=>{}
// props -- passing to the child componet
// 1) props are used to pass data from parent to child component
//2) theough props we will send the  primitive data and structure to the child component
//3)Props are used to send function definition to the child component
//useEeefect(()=>{},[])
//useCallback(()=>{},[]) -- for calling this it will depen on the html events
//useMemo(()=>{},[]) --for cllaing this function during render time it will not depend on the html events but during rerender time it will depend on the dependecy varibles

