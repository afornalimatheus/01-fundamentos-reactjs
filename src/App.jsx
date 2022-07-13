import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

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
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quae, cum asperiores laudantium ad explicabo odit, laboriosam est harum quibusdam id ipsa, hic magnam veritatis aspernatur facilis dolores illo dolore!" 
          />
          <Post 
            author="Diego Fernandes" 
            content="Um novo post muito legal!" 
          />
        </main>
      </div>
    </div>
  )
}