import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h1 className="heading flex"><b>ToDo List</b></h1>
<header className="flex">
    
        <form id="todoform">
            <input 
            id="input" 
            type="text" 
            placeholder="What are your plans today ??" />
            <input 
            id="submit" 
            type="submit" 
            value="Add Task" />
        </form>
  
    </header>

    <section>

    <div id="tasks">

        {/* <!-- <div className="task ">
            <div className="content">
                <input type="text" className="text" value="task" readonly />
            </div>
            <div className="actions">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div> --> */}

    </div>
</section>

</div>
  );
}

export default App;
