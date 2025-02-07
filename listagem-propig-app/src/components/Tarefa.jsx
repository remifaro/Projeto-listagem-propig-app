import React from 'react'

const Tarefa = ({tarefa}) => {
    return (
        <div className="tarefa">
            <div className="conteudo">
                <p>{tarefa.titulo}</p>
                <p className="descricao">({tarefa.descricao})</p>
            </div>
            <div>
                <button className="finalizar">Finalizar</button>
                <button className="excluir">Excluir</button>
            </div>
        </div>
    )
}

export default Tarefa