import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiCalendar, FiThumbsUp, FiUser } from 'react-icons/fi';

import Card from '../../components/Card';
import { Container, Actions, Action } from './styles';
import colors from '../../styles/colors';

export default function Dashboard() {
  const isAdmin = useSelector(state => state.user.profile.admin);

  return (
    <Container>
      <Actions>
        <Action>
          <Link to="/feedbacks">
            <Card>
              <FiThumbsUp size={30} color={colors.primary} />
              <h3>Feedbacks solicitados</h3>
            </Card>
          </Link>
        </Action>
        {isAdmin && (
          <>
            <Action>
              <Link to="/review">
                <Card>
                  <FiCalendar size={30} color={colors.primary} />
                  <h3>Criar revisão</h3>
                </Card>
              </Link>
            </Action>
            <Action>
              <Link to="/users">
                <Card>
                  <FiUser size={30} color={colors.primary} />
                  <h3>Usuários</h3>
                </Card>
              </Link>
            </Action>
          </>
        )}
      </Actions>
    </Container>
  );
}
