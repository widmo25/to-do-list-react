import "./style.css"

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    return (
        <ul className="hiddenList">
            <li className="hiddenList__item\">
                <button className="hiddenList__button">
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
            </li>
            <li className="hiddenList__item\">
                <button className="hiddenList__button"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ Wszystkie
                </button>
            </li>
        </ul>
    )
};

export default Buttons;
