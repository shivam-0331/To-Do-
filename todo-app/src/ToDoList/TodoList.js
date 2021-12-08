import React from "react";
import ToDo from "../ToDo/ToDo";

const ToDoList = ({ toDoList, handleFilter, handleToggle }) => {
    return (
        <div>
            {toDoList.map((todo) => {
                return <ToDo todo={todo} handleToggle={handleToggle} />;
            })}
            <button style={{ margin: "10px 0 15px 0" }} onClick={handleFilter}>
                Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;
