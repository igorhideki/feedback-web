import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div``;

export const Actions = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  list-style: none;
`;

export const Action = styled.li`
  width: 100%;
  text-align: center;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

    h3 {
      opacity: 0.8;
    }
  }

  & + li {
    margin-left: 16px;
  }

  h3 {
    color: ${colors.secondary};
    margin-top: 4px;
    transition: opacity 0.2s;
  }
`;
