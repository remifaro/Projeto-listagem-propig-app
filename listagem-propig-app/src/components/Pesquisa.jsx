import styles from "../App.module.css";

const Pesquisa = ({ pesquisa, setPesquisa }) => {
  return (
    <div className={styles.pesquisa}>
      <h2>Pesquisar tarefas:</h2>
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Nome da tarefa para pesquisa" />
    </div>
  );
};

export default Pesquisa;