import { Link } from 'react-router-dom'
import styles from './ListCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ListCard({ id, name, handleRemove }) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.list_card}>
      <h4>{name}</h4>
      <div className={styles.list_card_actions}>
        <Link to={`/list/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>

    </div>
  )
}

export default ListCard