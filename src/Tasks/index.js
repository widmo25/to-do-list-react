import "./style.css"

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`list__item ${props.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}
            >
                <button className="list__button">
                    {task.done ? "✔" : ""}
                </button>
                <p className={`list__task\ ${task.done ? "list__task--done" : ""}`}>
                    {task.content}
                </p>
                <button className="list__button list__button--higligthed">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;