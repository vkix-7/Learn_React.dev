import React, { useEffect, useState,useRef } from "react";
const Effect2 =()=>{ 
const [count, setCount] = useState(0);
const [value, setValue] = useState(1);
let a = useRef(0);
let btnRef = useRef(0);
useEffect(()=>{
 
   

    return () => {
        console.log("value of count ${count} is removed");
    }
})
return(
    <div>
        <h1> Count : {count}</h1>
        <div class = 's'>

        <button  onClick={() => setCount(count + 1)}>Increment</button>
        <h1>value: {value}</h1>
        <button onClick={() => setValue(value + 1)}>+</button></div>

    </div>)
}
export default Effect2