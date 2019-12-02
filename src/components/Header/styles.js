import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  padding: 0 30px;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  height: 70px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-size: 18px;
      font-weight: bold;
      color: ${colors.primary};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 30px;

  strong {
    display: block;
    color: ${colors.darkGray};
  }

  a {
    display: block;
    color: ${colors.gray};
    font-size: 12px;
  }
`;
