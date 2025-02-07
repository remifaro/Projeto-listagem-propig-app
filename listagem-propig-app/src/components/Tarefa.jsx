import React from 'react'

const Tarefa = ({tarefa, excluirTarefa, finalizarTarefa}) => {
    return (
        <div className="tarefa" style={{textDecoration: tarefa.estaFinalizada ? "line-through" : ""}}>
            <div className="conteudo">
                <p>{tarefa.titulo}</p>
                <p className="descricao">({tarefa.descricao})</p>
            </div>
            <div>
                <button className="finalizar" onClick={() => finalizarTarefa(tarefa.id)}>Finalizar</button>
                <button className="excluir" onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
            </div>
        </div>
    )
}

export default Tarefa