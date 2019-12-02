import React from 'react';
// import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import Button from '../Button';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <a to="/dashboard">
            Feedback App
          </a>
        </nav>

        <aside>
          <Profile>
            <strong>Nome usuário</strong>
            <a to="/profile">Meu perfil</a>
          </Profile>
          <Button type="danger">
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
