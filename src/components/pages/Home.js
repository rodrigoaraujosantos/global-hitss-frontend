import styles from './Home.module.css'
import imagemHome from '../../img/home.png'
import LinkButton from '../layout/LinkButton'

function Home(){
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Lista de itens</span></h1>
      <p>Comece a gerênciar suas listas de itens agora mesmo!</p>
      <div>
        <LinkButton to="/newlist" text="Criar lista" />
        <LinkButton to="/newitem" text="Adicionar item" />
      </div>
      <img src={imagemHome} alt="imagem da home"/>
    </section>
  )
}

export default Home