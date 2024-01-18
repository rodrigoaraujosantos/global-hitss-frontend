import styles from './Company.module.css';

function Company() {
  return (
    <div className={styles.company_container}>
      <h1>Empresa</h1>

      <section>
        <h2>Misión</h2>
        <p>
          Ser la empresa que crea e integra tecnologías de información, comunicaciones y servicios digitales habilitando soluciones especializadas para contribuir al logro de los objetivos de nuestros clientes.
        </p>
      </section>

      <section>
        <h2>Visión</h2>
        <p>
          Ser la empresa líder a nivel global en la evolución de la Sociedad Digital.
        </p>
      </section>

      <section>
        <h2>Política de Calidad</h2>
        <p>
          Contribuir en la transformación y evolución de la sociedad digital ofreciendo soluciones y servicios de tecnología orientados a obtener la satisfacción de nuestros clientes, mediante una entrega oportuna y con calidad, buscando constantemente la mejora continua y el cumplimiento de los requisitos aplicables.
        </p>
      </section>

      <section>
        <h2>Seguridad y Salud en el Trabajo</h2>
        <p>
          En Hitss Solutions, S.A. de C.V. estamos comprometidos a mejorar continuamente la eficacia de nuestro Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) conforme a los siguientes principios:
        </p>
        <p>
          Cumplir con la normatividad aplicable.
          Preservar la salud, seguridad e higiene de nuestra gente, visitantes y contratistas, a través de la prevención de lesiones y enfermedades.
          Poner a disposición de los trabajadores mecanismos válidos y eficaces para promover su participación y consulta.
        </p>
      </section>
    </div>
  );
}

export default Company;
