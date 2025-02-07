import { useState, useEffect } from 'react';
import Tarefa from "./components/Tarefa";
import CriarTarefa from "./components/CriarTarefa";
import Pesquisa from './components/Pesquisa';

import styles from "./App.module.css";


function App() {
  const tarefasIniciais = [
    {
      id: 1,
      titulo: "Tomar banho",
      descricao: "Entrar no chuveiro às 5h00.",
      estaFinalizada: false,
    },
    {
      id: 2,
      titulo: "Lanchar",
      descricao: "Comer 2 bananas, um iogurte, granola e leite às 15h00.",
      estaFinalizada: false,
    },
    {
      id: 3,
      titulo: "Estudar",
      descricao: "Estudar React e Vue às 13h30.",
      estaFinalizada: false,
    }
  ];

  // Carregando do localStorage ou das tarefas iniciais
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : tarefasIniciais;
  });

  // Atualizando o localStorage sempre que a lista de tarefas atualizar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // Função para atualização na minha lista de tarefas
  const adicionarTarefa = (titulo, descricao) => {
    const newTarefas = [...tarefas,
    {
      id: Math.floor(Math.random() * 10000),
      titulo,
      descricao,
      estaFinalizada: false,
    },
    ];

    setTarefas(newTarefas);
  };

  // Função para exclusão na minha lista de tarefas
  const excluirTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  // Função para "finalizar" na minha lista de tarefas
  const finalizarTarefa = (id) => {
    const newTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, estaFinalizada: !tarefa.estaFinalizada } : tarefa
    );
    setTarefas(newTarefas);
  };

    // Função para pesquisa 
    const [pesquisa, setPesquisa] = useState("");

  return (
    <div className={styles.App}>
      <CriarTarefa adicionarTarefa={adicionarTarefa}/>
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa}/>
      <h1>Listagem de Tarefas Propig App</h1>
      <div className={styles.lista_tarefa}>
        {tarefas
        // Aqui ele vai filtrar se há alguma tarefa que tenha os caracteres que incluímos na pesquisa
        .filter((tarefa) => tarefa.titulo.toLowerCase().includes(pesquisa.toLowerCase()))
        .map((tarefa) => (
          <Tarefa key={tarefa.id} tarefa={tarefa} excluirTarefa={excluirTarefa} finalizarTarefa={finalizarTarefa} />
        ))}
      </div>
    </div>
  )
}

export default App;
