import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./assets/COMPONENT/Form";
import Todo from "./assets/COMPONENT/Todo";
import { useState } from "react";

function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "this is the brand title",
      description: "this is brand new description",
    },
    {
      id: 2,
      title: "this is the brand title",
      description: "this is brand new description",
    },
    {
      id: 3,
      title: "this is the brand title",
      description: "this is brand new description",
    },
  ]);

  const [id, setid] = useState("");
  console.log("this isid =", id);

  const deletetodo = (id) => {
    settodos(todos.filter((d) => d.id != id));
  };

  return (
    <>
      <div className="container dark">
        <h1 className="text-center"> TO-DO LIST APP</h1>
        <Form id={id} setid={setid} todos={todos} settodos={settodos} />
        <Todo todos={todos} deletetodo={deletetodo} setid={setid} />
      </div>
    </>
  );
}

export default App;
