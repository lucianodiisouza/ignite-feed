import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/lucianodiisouza.png' alt='Comment owner' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luciano dii Souza</strong>
              <time title='15 de junho as 21:32' dateTime='2022-06-15 21:32:00'>
                Ha cerca de 1h atrás.
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, Parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment
