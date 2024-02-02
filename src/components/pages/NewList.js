import React from 'react';
import { useHistory } from 'react-router-dom';
import ListForm from '../list/ListForm';
import Message from '../layout/Message';
import axios from 'axios';
import styles from './NewList.module.css';

const API_URL = 'http://localhost:3000';

function NewList() {
  const history = useHistory();
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');

  const createList = async (list) => {
    try {
      const response = await axios.post(`${API_URL}/listas`, list);
      console.log(response.data);
      setMessage('Lista criada com sucesso!');
      history.push('/lists', { message: 'Lista criada com sucesso!' });
    } catch (err) {
      setError('Erro ao criar a lista.');
      console.error('Erro ao criar a lista:', err);
    }
  };

  return (
    <div className={styles.newlist_container}>
      <h1>Criar Lista</h1>
      <p>Crie sua lista para depois adicionar itens</p>
      {message && <Message type="success" msg={message} />}
      {error && <Message type="error" msg={error} />}
      <ListForm handleSubmit={createList} btnText="Criar lista" />      
    </div>
  );
}

export default NewList;