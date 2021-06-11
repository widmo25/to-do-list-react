import "./style.css"

const Tasks = ({ tasks, done, hideDone, removeTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}
            >
                <button className="list__button">
                    {task.done ? "✔" : ""}
                </button>
                <p className={`list__task ${done ? "list__task--done" : ""}`}>
                    {task.content}
                </p>
                <button onClick={() =>removeTask(task.id)} className="list__button list__button--higligthed">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;