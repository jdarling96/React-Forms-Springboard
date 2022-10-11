import React from "react";

const Todo = ({todo, removeTodo, id}) => {
    return (
        <div>
            <p>{todo}</p>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo