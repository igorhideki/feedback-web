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
  transition: all 0.2s;
  border: 1px solid #fff;
  border-radius: 8px;

  &:hover {
    border-color: ${colors.lightGray};
  }

  h3 {
    color: ${colors.secondary};
    margin-top: 4px;
    transition: opacity 0.2s;
  }
`;
