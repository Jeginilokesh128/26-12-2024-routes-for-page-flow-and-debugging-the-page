import React ,{useEffect,useState}from 'react'

export default function Home() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
console.log("from the inside",count)
  useEffect(() => {
    let data = 1;
    const intervalId = setInterval(() => {
      console.log(data++);
    }, 3000);

    // Update local storage once per effect execution
    localStorage.setItem("jegini", "lokesh");

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
      console.log(`from the inside clean function ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h1>Home</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((pre) => {
            return ++pre;
          });
        }}
      >
        click count-1
      </button>
      <button
        onClick={() => {
          setCount1((pre) => {
            return ++pre;
          });
        }}
      >
        click count-2
      </button>
      <h2>{count1}</h2>
    </div>
  );
}



// -------------------------------Doubts-------------------------
// 1)when the ueEffect will run infinite times -->when the useEffect will run infinite time
// 2)when we use clear function 
// 3)what data we are going to clear 
// 4)what happen if we did not clear 
// 5)how to chek wether the data is cleared or not 


///clear set inter vel 
//add event through thr dome eleements
//api data 
//static data