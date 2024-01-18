import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.facebook.com/globalhitssdobrasil" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/globalhitss/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/global-hitss/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>
          <a href="https://globalhitss.com/" target="_blank" rel="noopener noreferrer">
            Global Hitss
          </a>
        </span> &copy; 2024
      </p>
    </footer>
  )
}

export default Footer

