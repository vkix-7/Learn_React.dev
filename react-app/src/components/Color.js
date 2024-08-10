
import React,{useState} from "react";

 function Color(){
 const [color,setColor]=useState([]);
 const [bgColor, setBgColor]= useState([]);

 const handleChange =(e)=>{
 setColor(e.target.value);

 }


 return(
   <>
 
 <div class="data">
    <span>
        <input name="sport" type="checkbox" onCheck = {handleChange} > chess</input>
      
    </span>
   
    <span>
        <input name="sport" type="checkbox"   onCheck = {handleChange}> F00tball</input> 
       
    </span>
   
    <span>
        <input name="sport" type="checkbox"  onCheck = {handleChange} > game</input>
        
    </span>
</div>

 <div id ="sdk"style={{height:'800px',width:'800px', background:bgColor}} > <br/> he will play {color}
 </div>
 </>
 );

 }
 export default Color;