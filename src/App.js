import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const [tasks, setTasks] = useState([{ id: 1, content: "Uczyć sie Reacta", done: false },
  { id: 2, content: "Zjeść Obiad", done: true },])

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Container>
      <Header title="Lista Zadań" />
      <main>
        <Section title="Dodaj nowe Zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          extraBodyContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
          body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        />
      </main>
    </Container>
  )
};
export default App;
