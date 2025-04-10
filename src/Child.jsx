import React from "react";

// const Child = ({ numner,number2 }) => {
    const Child = ({ click1, click2, countvalue }) => {
        // console.log(countvalue,"countvalue");

      //   console.log("numner", numner);
      //   console.log("number2", number2);
    //   console.log("numner", click1);
    //   console.log("number2", click2);
      console.log("Child component rendered");
      return (
        <>
          <h2>Hello,! I'm the child component.{countvalue}</h2>
          {/* <button onClick={numner}>Increment</button>
          <button onClick={number2}>Increment</button> */}
          <button onClick={click1}>Increment1</button>
          <button onClick={click2}>Increment2</button>
        </>
      );
    };

// export default Child;
export default React.memo(Child);
// reset ->default value
//render ->render the component
//rerender means show the memoary location vlaue of the varible or prop in the document
