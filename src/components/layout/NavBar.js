import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Container>
        <a href="https://globalhitss.com/" target="_blank" rel="noopener noreferrer">
          <img width={150} src={logo} alt='Logo fabrica' />
        </a>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/lists">Listas</Link>
          </li>
          <li className={styles.item}>
            <Link to="/itens">Itens</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>

        </ul>
      </Container>
    </nav>
  )
}

export default NavBar