import Form from "./Form";
import Tasks from "./Tasks";
import HiddenList from "./HiddenList"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "Uczyć sie Reacta", done: false },
  { id: 2, content: "Zjeść Obiad", done: true },
];

const hideTask = false;

function App() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <main>
        <Section title="Dodaj nowe Zadanie" body={<Form />} />
        <Section title="Lista zadań" body={<HiddenList tasks={tasks} hideTask={hideTask} />} />
        <Section body={<Tasks tasks={tasks} hideTask={hideTask} />} />
      </main>
    </Container>
  )
};

export default App;
