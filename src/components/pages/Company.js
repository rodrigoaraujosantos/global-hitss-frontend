import styles from './Company.module.css';

function Company() {
  return (
    <div className={styles.company_container}>
      <h1>Empresa</h1>

      <section>
        <h2>MISSÃO</h2>
        <p>
        Ser a empresa que cria e integra tecnologias de informação, comunicações e serviços digitais, possibilitando soluções especializadas que contribuam para a concretização dos objetivos dos nossos clientes.
        </p>
      </section>

      <section>
        <h2>VISÃO</h2>
        <p>
        Ser a empresa líder global na evolução da Sociedade Digital. 
        </p>
      </section>

      <section>
        <h2>POLÍTICA DE QUALIDADE</h2>
        <p>
        Contribuir para a  transformação e evolução da sociedade digital  , oferecendo soluções e serviços tecnológicos que visam obter a  satisfação de nossos clientes,  por meio de entrega pontual e de qualidade, buscando constantemente a melhoria contínua e o atendimento aos requisitos aplicáveis.
        </p>
      </section>

      <section>
        <h2>SEGURANÇA E SAÚDE NO TRABALHO</h2>
        <p>
        Na Hitss Solutions, SA de CV estamos empenhados em melhorar continuamente a eficácia do nosso Sistema de Gestão de Segurança e Saúde no Trabalho (SGSST) de acordo com os seguintes princípios:


        </p>
        <p>
        Cumpra os regulamentos aplicáveis .
Preservar a saúde, segurança e higiene de nosso pessoal, visitantes e contratados, através da prevenção de lesões e doenças e,
Disponibilizar aos trabalhadores mecanismos válidos e eficazes para promover a sua participação e consulta, a fim de obter a sua opinião sobre a adequação de medidas organizacionais ou materiais para reduzir ou eliminar riscos , favorecendo a integração da prevenção.
        </p>
      </section>
    </div>
  );
}

export default Company;
