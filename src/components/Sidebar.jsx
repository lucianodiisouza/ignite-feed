import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'

import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=20'
        alt='Profile Banner'
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar hasBorder src='https://github.com/lucianodiisouza.png' />
        <strong>Luciano dii Souza</strong>
        <span>Frontend Engineer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar
