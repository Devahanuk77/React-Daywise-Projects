import React, { useState } from 'react'
import TodoItems from './TodoItems';

const TodoList = () => {
    const [text , setText] = useState("");
    const [todo, setTodo] = useState([]);
    const handleChange =(event)=>{
        // console.log(event.target.value);
        setText(event.target.value); //when this function is called it will update setText ="event.target.value"
    }
    const handleSubmit =()=>{
        let newItem ={
            title:text,
            id: new Date().toDateString()+text
        }


        // setTodo([...todo,text]); // new text will be added to todo Array
            setTodo([...todo,newItem]);
        setText(""); // it will empty the text in input field
    }
    console.log(text);
    console.log(todo);

    const handleDelete=(id)=>{
        // console.log(id);
        const todoAfterDeletion = todo.filter((element,index)=>{
            return element.id !=id; // we are excluding the matched id
        });
        // console.log(todoAfterDeletion);
        setTodo(todoAfterDeletion);
    }

    const handleEditTodo=(id,newItem)=>{
        let updatedTodo =todo.map((element)=>{
            if(element.id ===id){
                return {...element,title:newItem} // this is updating the title t latest value
            }
            return element;
        });
        setTodo(updatedTodo);
    }
   
  return (
    <div>
        <input type="text" value={text} onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
        <ol>
           {/* { todo.map((element,index)=>{
               return <li key={element.id}>{element.title}</li>
            }) } */}
            <TodoItems todo={todo} handleDelete={handleDelete} handleEditTodo={handleEditTodo}/> 
        </ol>
    </div>
  )
}

export default TodoList