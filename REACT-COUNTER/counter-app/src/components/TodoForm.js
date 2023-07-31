import React, {useState} from "react";

const TodoForm=({addTodo})=>{

    const [value,setValue]=useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Enter the task" onChange={(e)=>setValue(e.target.value)}></input>
            <button className="todo-btn" type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;