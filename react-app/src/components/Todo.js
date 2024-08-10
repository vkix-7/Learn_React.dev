import React,{useState} from 'react'; 

 
const Todo =()=>{ 
 
    const [input,setInput] = useState([]); 
    const [list,setList] = useState([]); 
 
    const handleChange = (e)=>{ 
        setInput(e.target.value); 
    } 
 
    const handleSubmit=(e)=>{ 
        e.preventDefault(); 
        setList([...list,input]); 
        setInput(''); 
    } 
 
    return( 
        <> 
         <h1>Todo List <br/> List your working easily </h1>
         <div class= "v">
        <form onSubmit={handleSubmit}> 
            <input type='text' onChange={handleChange}/> 
            <button type='submit'>Add Task</button> 
            <button>Delete</button>
        </form> 
        { 
            list.map((list,i)=>{ 
                return (<li key={i}>{list}</li>); 
            }) 
        } </div>
        </> 
    ); 
} 
 
export default Todo; 