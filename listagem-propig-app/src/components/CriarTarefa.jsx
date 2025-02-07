import React from 'react'

const CriarTarefa = () => {
  return (
    <div className="criar-tarefa">
        <h2>Crie uma nova tarefa:</h2>
        <form>
            <input type="text" placeholder="Digite o título da tarefa"/>
            <input type="text" placeholder="Digite a descrição da tarefa"/>
            <button>Criar</button>
        </form>
    </div>
  )
}

export default CriarTarefa