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

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <main>
        <Section title="Dodaj nowe Zadanie" body={<Form />} />
        <Section title="Lista zadań" body={<HiddenList tasks={tasks} hideDone={hideDone} />} />
        <Section body={<Tasks tasks={tasks} hideDone={hideDone} />} />
      </main>
    </Container>
  )
};

export default App;
