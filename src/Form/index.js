import React, { useState } from "react";
import "./style.css"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                type="text" name="task"
                required
                autofocus={true}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button" disabled={newTaskContent.trim() === ""}>Dodaj zadanie</button>
        </form>
    )
}
export default Form;