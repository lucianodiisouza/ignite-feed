import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/lucianodiisouza.png' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luciano dii Souza</strong>
              <time title='15 de junho as 21:32' dateTime='2022-06-15 21:32:00'>
                Ha cerca de 1h atrás.
              </time>
            </div>
            <button title='Deletar comentário' className={styles.deleteBtn}>
              <Trash size={24} />
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
