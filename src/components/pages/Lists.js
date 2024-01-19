import axios from 'axios';
import Message from '../layout/Message';
import { useLocation } from 'react-router-dom';
import styles from './Lists.module.css';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ListCard from '../list/ListCard'
import { useState, useEffect } from 'react';


function Lists(){  

  const [ lists, setLists ] = useState([])
  const [ removeLoading, setRemoveLoading ] = useState(false)
  const [ listMessage, setListMessage ] = useState('')

  const location = useLocation()
  let message = ""
  if(location.state) {
    message = location.state.message
  }

  const getLists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/lista")
      
      const data = response.data
      
      setLists(data)

      console.log(data);

      setRemoveLoading(true)

    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getLists();
  }, []);

  const removeList = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/lista/${id}`)

      setLists(lists.filter((list) => list.id !== id))

      setListMessage('Lista removida com sucesso!')
      
    } catch (error) {
      console.log(error)
    }
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
            name={list.nome}
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