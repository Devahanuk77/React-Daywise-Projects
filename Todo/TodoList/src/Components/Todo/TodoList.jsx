import React, { useState } from 'react'

const TodoList = () => {
    const [text, setText]= useState(""); 
    const [todo, setTodo] = useState([]);
    // console.log(text);
    const handleChange =(event)=>{
        // console.log(event.target.value);
        setText(event.target.value); //when this function is called it will update the text
       
    }
    const handleSubmit =()=>{
        setTodo([...todo,text]); // new text will be added to todo array

    }
    console.log(todo);
  return (
    <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        <ol>
            {todo.map((element,index)=>{
                return <li key={index}>{element}</li>
            })}
        </ol>
    </div>
  )
}

export default TodoList