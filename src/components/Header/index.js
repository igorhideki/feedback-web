import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';
import { Container, Content, Profile } from './styles';
import Button from '../Button';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    console.tron.log('teste');
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">Feedback App</Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <a href="/">Meu perfil</a>
          </Profile>
          <Button color="danger" onClick={handleSignOut}>
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
