import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (todo) => {
        setTodos(todos => (
            [...todos, { ...todo }]
        ))
    }
    const removeTodo = (idx) => {
        setTodos(todos => (
            todos.filter((todo, i) => (i !== idx) )))

    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo, idx) => (
            <Todo removeTodo={removeTodo} data-testid={idx} key={idx} id={idx} todo={todo.todo} />
            ))}

        </div>
    )

}

export default TodoList