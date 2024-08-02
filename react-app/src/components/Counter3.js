import React,{useState} from 'react'
function Counter3()
{
const [count, setcount] = useState(0);

  return ( 
   <><div class='responsiv-div' >
 <h1>Count : {count}</h1>
 <button class = "v" id ='count'onClick={()=> setcount(count+1)}> +</button>
 <button class = "v" onClick={()=> setcount(count-1)}>-</button>
 </div>
  </>
  );

}
export default Counter3