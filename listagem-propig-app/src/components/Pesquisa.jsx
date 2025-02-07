const Pesquisa = ({ pesquisa, setPesquisa }) => {
  return (
    <div className="pesquisa">
      <h2>Pesquisar tarefas:</h2>
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Digite o nome da tarefa que deseja pesquisar..." />
    </div>
  );
};

export default Pesquisa;