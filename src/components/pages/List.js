import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import Message from '../layout/Message';
import ListForm from '../list/ListForm';
import styles from './List.module.css';



const API_URL = 'http://localhost:3000';

function List() {
  const { id } = useParams();
  const [list, setList] = useState({});
  const [showListForm, setShowListForm] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`${API_URL}/listas/${id}`);
        setList(response.data);
      } catch (error) {
        console.error('Erro ao obter os detalhes da lista:', error);
        setError('Erro ao carregar os detalhes da lista.');
      }
    };

    fetchList();
  }, [id]);

  const editList = async (updatedList) => {
    try {
      const response = await axios.put(`${API_URL}/listas/${id}`, updatedList);
      setList(response.data);
      setShowListForm(false);
      setMessage('Lista atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar a lista:', error);
      setError('Erro ao atualizar a lista.');
    }
  };

  const toggleListForm = () => {
    setShowListForm(!showListForm);
  };
  

  return (
    <div>
      {list.nome ? (
        <div className={styles.list_details}>
          <Container customClass="column">
            {message && <Message type="success" msg={message} />}
            {error && <Message type="error" msg={error} />}
            <div className={styles.details_container}>
              <h1>Lista: {list.nome}</h1>
              <button className={styles.btn} onClick={toggleListForm}>
                {!showListForm ? 'Editar lista' : 'Fechar'}
              </button>
              {!showListForm ? (
                <div className={styles.list_info}>
                  <p>
                    <span>Nome:</span> {list.nome}
                  </p>
                </div>
              ) : (
                <div className={styles.list_info}>
                  <ListForm handleSubmit={editList} btnText="Concluir edição" listData={list} />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default List;
