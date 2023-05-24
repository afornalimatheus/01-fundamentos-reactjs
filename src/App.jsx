import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Matheus Afornali"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nam neque quam laboriosam sunt beatae ratione id tempora odit temporibus repellat consequuntur amet soluta quo doloremque, possimus repellendus? Soluta, quia."
          />
          <Post 
            author="Andressa Ferreira"
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </div>
  )
}