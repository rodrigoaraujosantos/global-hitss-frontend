import { useState } from 'react';
import styles from './ListForm.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ListForm({ handleSubmit, btnText, listData }) {
  const [list, setList] = useState(listData || { nome: '' });

  const handleChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(list);
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome da lista"
        name="nome"
        value={list.nome}
        placeholder="Insira o nome da lista"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ListForm;
