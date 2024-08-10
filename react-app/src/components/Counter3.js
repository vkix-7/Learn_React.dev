import React,{useState} from 'react'
function Counter3()
{
const [count, setcount] = useState(0);

  return ( 
   <>
   <div class = "v"  >
 <h1 class = 'r'>Count : {count}</h1>
 <button class = 'r' onClick={()=> setcount(count-1)}>-</button>
 <button class = 'r'  id ='count' onClick={()=> setcount(count+1)}> +</button>
 </div>
  </>
  );

}
export default Counter3