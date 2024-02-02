import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ListCard from '../list/ListCard';
import Loading from '../layout/Loading';
import Message from '../layout/Message';
import styles from './Lists.module.css';

const API_URL = 'http://localhost:3000';

function Lists() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  const { state: { message: locationMessage = '' } = {} } = location;

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`${API_URL}/listas`);
        setLists(response.data);
        setIsLoading(false);
        setMessage(locationMessage || '');
      } catch (error) {
        setError('Erro ao buscar as listas.');
        setIsLoading(false);
        console.error('Erro ao buscar as listas:', error);
      }
    };

    fetchLists();
  }, [locationMessage]);

  const removeList = async (id) => {
    try {
      await axios.delete(`${API_URL}/listas/${id}`);
      setLists(lists.filter((list) => list.id !== id));
      setMessage('Lista removida com sucesso!');
    } catch (error) {
      setError('Erro ao remover a lista.');
      console.error('Erro ao remover a lista:', error);
    }
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Minhas Listas</h1>
        <LinkButton to="/newlist" text="Criar lista" />
      </div>
      {message && <Message type="success" msg={message} />}
      {error && <Message type="error" msg={error} />}
      <Container customClass="start">
        {lists.length > 0 ? (
          lists.map((list) => (
            <ListCard
              id={list.id}
              name={list.nome}
              key={list.id}
              handleRemove={removeList}
            />
          ))
        ) : isLoading ? (
          <Loading />
        ) : (
          <p>Não há listas cadastradas</p>
        )}
      </Container>
    </div>
  );
}

export default Lists;
