import React, { useState, useEffect } from 'react';
import { FiShield } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Container, User, UserName, UserEmail } from './styles';
import colors from '../../styles/colors';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/users');

        setUsers(response.data);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <h2>Usuários</h2>
      <p>Lista de funcionários.</p>

      <ul>
        {users.map(user => (
          <User key={user.id}>
            <div>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </div>
            {user.admin && <FiShield size={20} color={colors.primary} />}
          </User>
        ))}
      </ul>
    </Container>
  );
}
