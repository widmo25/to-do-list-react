const tasks = [
  { id: 1, content: "Uczyć sie Reacta", done: false },
  { id: 2, content: "Zjeść Obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
      <header>
        <h1>Lista Zadań</h1>
      </header>
      <main>
        <section className="section">
          <h2 className="section__head">Dodaj nowe zadanie</h2>
          <form className="form">
            <input className="form__input" type="text" name="task" required autofocus
              placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
          </form>
        </section>
        <section className="section section--higlighted">
          <h2 className="section__head section__head--higlighted">Lista zadań</h2>
          <ul className="hiddenList"></ul>
        </section>
        <section className="section">
          <ul className="list">
          </ul>
        </section>
      </main>
    </div>
  )
};

export default App;
