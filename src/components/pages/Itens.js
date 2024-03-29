import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import styles from './Itens.module.css'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ItemCard from '../item/ItemCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Itens(){

  const [ itens, setItens ] = useState([])
  const [ removeLoading, setRemoveLoading ] = useState(false)
  const [ itemMessage, setItemMessage ] = useState('')

  const location = useLocation()
  let message = ""
  if(location.state) {
    message = location.state.message
  }

  // useEffect(() => {
  //   fetch('http://localhost:5000/itens', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     // console.log(data);
  //     setItens(data)
  //     setRemoveLoading(true)
  //   })
  //   .catch((err) => console.log(err))
  // }, [])

  const getItens = async () => {
    try {
      const response = await axios.get("http://localhost:3000/item")
      
      const data = response.data

      console.log(data);
      
      setItens(data)

      setRemoveLoading(true)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItens();
  }, []);

  // function removeItem(id){
  //   fetch(`http://localhost:5000/itens/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   }).then((resp) => resp.json())
  //   .then(() => {
  //     setItens(itens.filter((item) => item.id !== id))
  //     setItemMessage('Item removido com sucesso!')
  //   })
  //   .catch((err) => console.log(err))
  // }

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/item/${id}`)

      setItens(itens.filter((item) => item.id !== id))
      
      setItemMessage('Item removido com sucesso!')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus itens</h1>
        <LinkButton to="/newitem" text="Adicionar item" />
      </div>
      {message && <Message type="success" msg={message}/>}
      {itemMessage && <Message type="success" msg={itemMessage}/>}
      <Container customClass="start">
        {itens.length > 0 &&
          itens.map((item) => (
          <ItemCard
            id={item.id}
            name={item.nome}
            quantidade={item.quantidade}
            list={item.nome_lista}
            key={item.id}
            handleRemove={removeItem}
         />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && itens.length === 0 && (
          <p>Não há itens adicionados</p>
        )}
      </Container>
    </div>
  )
}

export default Itens