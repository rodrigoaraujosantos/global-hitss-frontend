import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contacts_container}>
      <h1>CONTÁCTATE CON NOSOTROS</h1>

      <p className={styles.address}>
        CIUDAD DE MÉXICO
        <br />
        Ampliación Granada, Lago Zurich 219,
        <br />
        Plaza Carso, Piso 9
        <br />
        C.P. 11529
      </p>

      <p className={styles.tel}>
        Tel. <span>(55) 5282 8990 ext:10000</span>
      </p>

      <p>
        Envíanos un correo electrónico a{' '}
        <a className={styles.email_link} href="mailto:info@tudominio.com">info@tudominio.com</a>.
      </p>
    </div>
  );
}

export default Contact;
