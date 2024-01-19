import styles from './Item.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ItemForm from '../item/ItemForm'

function Item() {

  const { id } = useParams()

  const [ item, setItem ] = useState([])

  const [ showItemForm, setShowItemForm ] = useState(false)

  const [ message, setMessage ] = useState("")

  const [ type, setType ] = useState()

  useEffect(() => {

    fetch(`http://localhost:3000/item/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((resp) => resp.json())
    .then((data) => {
      setItem(data)
    })
    .catch((err) => console.log(err))

  }, [id])

  function editPost(item){
    fetch(`http://localhost:3000/item/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    }).then((resp) => resp.json())
    .then((data) => {
      setItem(data)
      setShowItemForm(false)
      setMessage('Item atualizado!')
      setType('success')
    })
    .catch((err) => console.log(err))
  }

  function toggleItemForm(){
    setShowItemForm(!showItemForm)
  }

  return (
    <div>
      {item.name ? (
        <div className={styles.item_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Item: {item.nome}</h1>
              <button className={styles.btn} onClick={toggleItemForm} >
                {!showItemForm ? 'Editar item' : 'Fechar'}
              </button>
              {!showItemForm ? (
                <div className={styles.item_info}>
                  <p>
                    <span>Nome:</span> {item.name}
                  </p>
                  <p>
                    <span>Quantidade:</span> {item.quantidade}
                  </p>
                  <p>
                    <span>Lista:</span> {item.list.name}
                  </p>
                </div>
              ) : (
                <div className={styles.item_info}>
                  <ItemForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    itemData={item}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Item