import { useEffect, useState } from 'react'

import styles from './ItemForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'
import axios from 'axios'

function ItemForm({ handleSubmit, btnText, itemData }) {

  const [lists, setLists] = useState([])

  const [item, setItem] = useState(itemData || {})

  const getLists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/lista")
      
      const data = response.data
      
      setLists(data)

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLists();
  }, []);

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
        name="nome"
        placeholder="Insira o nome do item"
        handleOnChange={handleChange}
        value={item.nome ? item.nome : ""}
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