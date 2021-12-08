import React, { useState } from "react";
const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Enter Task ..."
            />
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;
