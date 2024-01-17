import { useHistory } from 'react-router-dom'
import styles from './NewList.module.css'
import ListForm from '../list/ListForm'

function NewList() {

  const history = useHistory()

  function createPost(list){
    fetch("http://localhost:5000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/jon",
      },
      body: JSON.stringify(list)
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
      history.push('/lists', {message: 'Lista criada com sucesso!' })
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.newlist_container} >
      <h1>Criar Lista</h1>
      <p>Crie sua lista para depois adicionar itens</p>
      <ListForm handleSubmit={createPost} btnText="Criar lista"/>
    </div>
  )
}

export default NewList