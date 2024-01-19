import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contacts_container}>
      <h1>CONTATE-NOS</h1>

      <p className={styles.address}>
      CIDADE DO MÉXICO
        <br />
        Extensão Granada, Lago Zurich 219,
        <br />
        Plaza Carso, Piso 9
        <br />
        CP 11529
      </p>

      <p className={styles.tel}>
        Tel. <span>Tel. (55) 5282 8990 ramal:10000</span>
      </p>

      <p>
      Envie-nos um e-mail para: {' '}
        <a className={styles.email_link} href="mailto:info@tudominio.com">info@tudominio.com</a>.
      </p>
    </div>
  );
}

export default Contact;
