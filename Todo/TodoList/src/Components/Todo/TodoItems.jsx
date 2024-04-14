import React from 'react'

const TodoItems = (props) => {
    const {todo, handleDelete} = props;
  return (
    <>
     { todo.map((element,index)=>{
        return <>
        <li key={element.id}>{element.title}</li>
        <button>Edit</button>
        <button onClick={()=> handleDelete(element.id)}>Delete</button>
        </>
     }) }
    </>
   
  )
}

export default TodoItems