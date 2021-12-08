import React, { useState } from "react";
import Header from "./Header/Header";
import ToDoList from "./ToDoList/TodoList";
import data from "./data/data.json";
import ToDoForm from "./ToDoForm/ToDoForm";

function App() {
    const [toDoList, setToDoList] = useState(data);

    const handleFilter = () => {
        let filtered = toDoList.filter((task) => {
            return !task.complete;
        });
        setToDoList(filtered);
    };

    const handleToggle = (id) => {
        let toggledData = toDoList.map((task) => {
            return task.id === Number(id)
                ? { ...task, complete: !task.complete }
                : { ...task };
        });
        setToDoList(toggledData);
    };

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [
            ...copy,
            { id: toDoList.length + 1, task: userInput, complete: false },
        ];
        setToDoList(copy);
    };

    return (
        <div className="todo-app">
            <Header />
            <ToDoList
                toDoList={toDoList}
                handleFilter={handleFilter}
                handleToggle={handleToggle}
            />
            <ToDoForm addTask={addTask} />
        </div>
    );
}

export default App;
