import { useState } from 'react'
import styles from "../App.module.css";

const CriarTarefa = ({adicionarTarefa}) => {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação de entrada - não permite titulo ou descricao em branco 
        if(!titulo || !descricao) return;
        
        // Adição dos valores para a função de atualização da lista
        adicionarTarefa(titulo, descricao);

        // Limpeza dos dados após tentativa de criação da nova tarefa
        setTitulo("");
        setDescricao("");
    };

  return (
    <div>
        <h2>Crie uma nova tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o título da tarefa" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <input type="text" placeholder="Digite a descrição da tarefa" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
            <button className={styles.criar}>Criar</button>
        </form>
    </div>
  )
}

export default CriarTarefa