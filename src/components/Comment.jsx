import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/afornalimatheus.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Afornali</strong>
              <time title="11 de Maio às 08:20" dateTime="2022-05-22 08:20:14">Cerca de 1h atrás</time>
            </div> 

            <button title="Deletar comentário">
              <Trash size={24} />
            </button> 
          </header>

          <p>Muito bom Devon, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}