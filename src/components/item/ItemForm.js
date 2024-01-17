import { useEffect, useState } from 'react'

import styles from './ItemForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'

function ItemForm({ handleSubmit, btnText, itemData }) {

  const [lists, setLists] = useState([])

  const [item, setItem] = useState(itemData || {})

  useEffect(() => {
    fetch('http://localhost:5000/lists', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then((resp) => resp.json())
      .then((data) => {
        setLists(data)
      })
      .catch(err => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    // console.log(item);
    handleSubmit(item)
  }

  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  function handleList(e) {
    setItem({ ...item, list: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text, 
    } })
  }


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Insira o nome do item"
        handleOnChange={handleChange}
        value={item.name ? item.name : ""}
      />

      <Input
        type="number"
        text="Quantidade"
        name="quantidade"
        placeholder="Insira a quantidade do item"
        handleOnChange={handleChange}
        value={item.quantidade ? item.quantidade : ""}
      />

      <Select
        name="lists_id"
        text="Selecione a lista"
        options={lists}
        handleOnChange={handleList}
        value={item.list ? item.list.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  )
}

export default ItemForm