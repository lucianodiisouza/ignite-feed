import { Header, Sidebar } from './components'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            <h1>Luciano Souza</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              saepe!
            </p>
          </div>
          <div>
            <h1>Luciano Souza</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              saepe!
            </p>
          </div>
          <div>
            <h1>Luciano Souza</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              saepe!
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
