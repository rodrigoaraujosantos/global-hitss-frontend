import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Lists.module.css'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ListCard from '../list/ListCard'
import { useState, useEffect } from 'react'

function Lists(){

  const [ lists, setLists ] = useState([])
  const [ removeLoading, setRemoveLoading ] = useState(false)
  const [ listMessage, setListMessage ] = useState('')

  const location = useLocation()
  let message = ""
  if(location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/lists', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      setLists(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  function removeList(id){
    fetch(`http://localhost:5000/lists/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((resp) => resp.json())
    .then((data) => {
      setLists(lists.filter((list) => list.id !== id))
      setListMessage('Lista removida com sucesso!')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Minhas Listas</h1>
        <LinkButton to="/newlist" text="Criar lista" />
      </div>
      {message && <Message type="success" msg={message}/>}
      {listMessage && <Message type="success" msg={listMessage}/>}
      <Container customClass="start">
        {lists.length > 0 &&
          lists.map((list) => (
          <ListCard
            id={list.id}
            name={list.name}
            key={list.id}
            handleRemove={removeList}
         />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && lists.length === 0 && (
          <p>Não há listas cadastrados</p>
        )}
      </Container>
    </div>
  )
}

export default Lists