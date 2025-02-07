import { useState } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id:1,
      titulo: "Criar funcionalidade x no sistema",
      descricao: "Trabalho",
      estaFinalizada: false,
    },
    {
      id:2,
      titulo: "Ir pra academia",
      descricao: "Pessoal",
      estaFinalizada: false,
    },
    {
      id:3,
      titulo: "Estudar React",
      descricao: "Estudos",
      estaFinalizada: false,
    }
  ]);

  return (
      <div className="App">
        <h1>Listagem de Tarefas Propig App</h1>
        <div className="lista-tarefa">
          {tarefas.map((tarefa) => (
            <div className="tarefa">
               <div className="conteudo">
                <p>{tarefa.titulo}</p>
                <p className="descricao">({tarefa.descricao})</p>
                </div> 
            <div>
            <button>Finalizar</button>
            <button>Excluir</button>
            </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default App
