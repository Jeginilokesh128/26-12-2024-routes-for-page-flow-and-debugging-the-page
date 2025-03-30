const Card = ({
  title,
  description,
  renderContent,
  renderButton={name1:"jegini"},
  childfunction,
}) => {
    console.log(childfunction, "childfunction");
    let functiondefineseoerately=()=>{
        alert("functiondefineseoerately");
      }
let functionwitharguments=(name)=>{
  alert(name);
}
let studentname="jegini";
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-4 w-80">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Click Me
      </button>
      {/* <h1>{childfunction}</h1> // note: with the help of the html we cant show
      the function value in the console only printiuing is possible */}
      <h1>{[1, 2, 3, 4, 5]}</h1>
      {/* <h1>{renderButton}</h1> */}
      <h2 onClick={childfunction}>clickhere</h2>
      {/* here i ma calling the function directly */}
      {/* <h2 onClick={alert("llllllllllll")}>clickhere</h2>  */}
      {/* in the html we will use the onclick=alert("llllllllllll") thid will not
      call aotomaticall in the html */}
      {/* in teh reactjs we will pass paranthities to the function while calling in te jsx instaad of that we will use only the function name with out the brackets */}
      <h2 onClick={functiondefineseoerately}>functiondefineseoerately</h2>
      <h2 onClick={() => functionwitharguments("jegini")}>
        functionwitharguments static daa type
      </h2>
      <h2
        onClick={
          (e) => {
            functionwitharguments();
            console.log(e);
          }
          //   or else will pass the the data while ittera the html element how read table data in the html element
        }
      >
        {/* console.log(e);functionwitharguments dynamically through the event */}
        functionwitharguments dynamically through the event
      </h2>
      <h2
        onClick={
          (e) => {
            functionwitharguments(studentname);
            console.log(e);
          }
          //   or else will pass the the data while ittera the html element how read table data in the html element
        }
      >
        {/* console.log(e);functionwitharguments dynamically through the event */}
        functionwitharguments dynamically through the varible 
      </h2>
      {/* <h2 onClick={"llllllllllllllll"}>passing primitve value to the html event</h2> */}
    </div>
  );
};



export default Card;

// note: with the help of the html we cant show the function value in the console only printiuing is possible
// Array -- arra will print the vlaue in the html element

// object -- object will not ptint in the html element

//function defintion will recive like props

// props reading in the diffent places 

// function read like attribute (with the help of html inbuild attribute html events) 
// primitve data type read in between the brackets <></>



// () => { (function defintion) without name (function defintion is going to hold the varible) -- this is not a call back function function inside another function
//       alert("Hello");
//     } 'childfunction'

// if the function is called  then the block of code is going to executed witrh ic presnt in the curely baces

// function calling in the html element in the jsx structure

//    <h2 onClick={functiondefineseoerately}>functiondefineseoerately</h2>; function defintion are vcalling with html events in the jsx structure for the function calling we nor use the  {functiondefineseoerately()} this is not a correct way of calling the function in the jsx structure if we pass like this it will call the function directly with out event trigger explicityly

//   <h2 onClick={"llllllllllllllll"}>
//     passing primitve value to the html event
//   </h2>; //html event will alwya hold the function defintion insted of the structre and primiteve data  types


//function defintion callling with event without evens

// without event we can call the function with the help of the jsx structure
//  <h2 onClick={functiondefineseoerately}>functiondefineseoerately</h2>; //note onclik event will hold the function defintion or elese it will theough error

// if we are passing arugumensts to the function then we will use the arrow function to call the function with the help of the event


// for theprope reussble function befor we will load the function defintion in the jsx structure we will define the function defintion in the jsx structure
// onClick={functionwitharguments("jegini")} this is wrong
// onClick={{}=>{
//     propfunctionname()
// }} 
//here prope function is dynamiclly called with the help of the event
//

//when we are sending function defintion as prop we are calling in the child componet by using the prop name and the event here for the prope we will pass diffent function defintion if the function defintion to the defion if gthe aruguments count will change on that time how to handel nedd to do hard code


// https://chatgpt.com/share/67dee82f-7840-800f-bd59-54886e6383f6