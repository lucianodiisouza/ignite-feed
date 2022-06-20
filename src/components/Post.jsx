import Comment from './Comment'
import styles from './Post.module.css'

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src='https://github.com/lucianodiisouza.png'
            alt='Author Picture'
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Luciano dii Souza</strong>
            <span>Frontend Engineer</span>
          </div>
        </div>

        <time title='15 de junho as 21:32' dateTime='2022-06-15 21:32:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>
            Dolor cumque a sapiente nesciunt ducimus possimus. Aliquam iusto
            unde expedita
          </p>
          <p>nulla.</p>

          <p>
            <a href='#'>twitter.com/lucianodiisouza</a>
          </p>
          <p>
            <a href='#'>#test</a> <a href='#'>#anothertag</a>{' '}
            <a href='#'>#development</a>{' '}
          </p>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

export default Post
