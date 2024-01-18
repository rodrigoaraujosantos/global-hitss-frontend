import styles from './List.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ListForm from '../list/ListForm'

function List(){

  const { id } = useParams()

  const [ list, setList ] = useState([])

  const [ showListForm, setShowListForm ] = useState(false)

  const [ message, setMessage ] = useState("")

  const [ type, setType ] = useState()

  useEffect(() => {

    fetch(`http://localhost:5000/lists/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((resp) => resp.json())
    .then((data) => {
      setList(data)
    })
    .catch((err) => console.log(err))

  }, [id])

  function editList(list){
    
    fetch(`http://localhost:3000/lista/${list.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list),
    }).then((resp) => resp.json())
    .then((data) => {
      setList(data)
      setShowListForm(false)
      setMessage('Lista atualizada!')
      setType('success')
    })
    .catch((err) => console.log(err))
  }

  function toggleListForm(){
    setShowListForm(!showListForm)
  }

  return (
    <div>
      {list.nome ? (
        <div className={styles.list_details}>
          <Container customClass="column">
          {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Lista: {list.nome}</h1>
              <button className={styles.btn} onClick={toggleListForm} >
                {!showListForm ? 'Editar lista' : 'Fechar'}
              </button>
              {!showListForm ? (
                <div className={styles.list_info}>
                  <p>
                    <span>Nome:</span> {list.nome}
                  </p>
                </div>
              ) : (
                <div className={styles.list_info}>
                  <ListForm
                    handleSubmit={editList}
                    btnText="Concluir edição"
                    listData={list}
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

export default List