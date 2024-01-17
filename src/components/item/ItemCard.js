import { Link } from 'react-router-dom'
import styles from './ItemCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ItemCard({id, name, quantidade, list, handleRemove}){

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.item_card}>
      <h4>{name}</h4>
      <p>
        <span>Quantidade:</span>{quantidade}
      </p>
      <p className={styles.list_text}>
        <span></span>{list}
      </p>
      <div className={styles.item_card_actions}>
        <Link to={`/item/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>    
    </div>
  )
}

export default ItemCard