import { useState } from 'react'

import styles from './ListForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ListForm({ handleSubmit, btnText, listData }){

  const [ list, setList ] = useState(listData || {})

  const submit = (e) => {
    e.preventDefault()
    // console.log(list);
    handleSubmit(list)
  }

  function handleChange(e) {
    setList({...list, [e.target.name]: e.target.value })
  }


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome da lista"
        name="nome"
        placeholder="Insira o nome da lista"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ListForm