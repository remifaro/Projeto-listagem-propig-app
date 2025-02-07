import React from 'react'
import styles from "../App.module.css";

const Tarefa = ({tarefa, excluirTarefa, finalizarTarefa}) => {
    return (
        <div className={styles.tarefa} style={{textDecoration: tarefa.estaFinalizada ? "line-through" : ""}}>
            <div className={styles.conteudo}>
                <p>{tarefa.titulo}</p>
                <p className={styles.descricao}>({tarefa.descricao})</p>
            </div>
            <div>
                <button className={styles.finalizar} onClick={() => finalizarTarefa(tarefa.id)}>Finalizar</button>
                <button className={styles.excluir} onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
            </div>
        </div>
    )
}

export default Tarefa