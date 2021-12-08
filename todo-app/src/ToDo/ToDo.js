import React from "react";
const ToDo = ({ todo, handleToggle }) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.target.id);
    };
    return (
        <div
            className={todo.complete ? "todo strike" : "todo"}
            value={todo.id}
            id={todo.id}
            key={todo.id + todo.task}
            name="todo"
            onClick={handleClick}
        >
            {todo.task}
        </div>
    );
};

export default ToDo;
