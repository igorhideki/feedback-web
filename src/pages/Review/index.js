import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Button from '../../components/Button';
import { Container, SelectWrapper, SelectLabel, Select, Error } from './styles';

export default function Review() {
  const [reviewer, setReviewer] = useState({});
  const [reviewed, setReviewed] = useState({});
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      if (response.data) {
        const data = response.data.map(user => ({
          value: user.id,
          label: user.name,
        }));

        setUsers(data);
      } else {
        toast.error('Não foi possível carregar os usuários.');
      }
    }

    loadUsers();
  }, []);

  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = {
      reviewer_id: reviewer.value,
      reviewed_id: reviewed.value,
    };

    if (!(reviewer.value && reviewed.value)) {
      setError('Campos obrigatórios');
    } else if (reviewer.value === reviewed.value) {
      setError('Os funcionários devem ser diferentes');
    } else {
      try {
        await api.post('/reviews', data);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }
  }

  return (
    <Container>
      <h2>Criar revisão</h2>
      <p>
        Selecione o funcionário que dará o <strong>feedback</strong> e o que
        receberá.
      </p>

      <form onSubmit={handleOnSubmit}>
        <SelectWrapper>
          <SelectLabel>Revisor</SelectLabel>
          <Select
            name="reviewer"
            placeholder="Selecione um funcionário"
            options={users}
            onChange={setReviewer}
          />
        </SelectWrapper>
        <SelectWrapper>
          <SelectLabel>Avaliado</SelectLabel>
          <Select
            name="reviewed"
            placeholder="Selecione um funcionário"
            options={users}
            onChange={setReviewed}
          />
        </SelectWrapper>
        {!!error && <Error>{error}</Error>}

        <Button type="submit">Criar solicitação de revisão</Button>
      </form>
    </Container>
  );
}
