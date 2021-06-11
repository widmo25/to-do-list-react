import "./style.css"

const Buttons = ({tasks, hideDone}) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <ul className="buttons">
            <li className="buttons__item">
                <button className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </li>
            <li className="buttons__item">
                <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ Wszystkie
                </button>
            </li>
        </ul>
    )
};

export default Buttons;
