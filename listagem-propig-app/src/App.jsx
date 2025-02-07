import { useState } from 'react';
import Tarefa from "./components/Tarefa";
import CriarTarefa from "./components/CriarTarefa";

import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Criar funcionalidade x no sistema",
      descricao: "Trabalho",
      estaFinalizada: false,
    },
    {
      id: 2,
      titulo: "Ir pra academia",
      descricao: "Pessoal",
      estaFinalizada: false,
    },
    {
      id: 3,
      titulo: "Estudar React",
      descricao: "Estudos",
      estaFinalizada: false,
    }
  ]);

  return (
    <div className="App">
      <CriarTarefa />
      <h1>Listagem de Tarefas Propig App</h1>
      <div className="lista-tarefa">
        {tarefas.map((tarefa) => (
            <Tarefa tarefa={tarefa} />
          ))}
      </div>
    </div>
  )
}

export default App
