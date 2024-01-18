import { useHistory } from 'react-router-dom'
import styles from './NewItem.module.css'
import ItemForm from '../item/ItemForm'

function NewItem() {

  const history = useHistory()


  function createItem(item){
    fetch("http://localhost:3000/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
      history.push('/itens', {message: 'Item criado com sucesso!' })
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.newItem_container} >
      <h1>Adicionar item</h1>
      <p>Adicione um item em alguma lista</p>
      <ItemForm handleSubmit={createItem} btnText="Adicionar item"/>
    </div>
  )
}

export default NewItem