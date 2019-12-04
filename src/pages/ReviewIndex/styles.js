import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  h2 {
    color: ${colors.secondary};
  }

  p {
    color: ${colors.darkGray};
  }

  ul {
    margin-top: 24px;

    li + li {
      margin-top: 10px;
    }
  }
`;

export const Review = styled.li`
  display: flex;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 40px;
  padding: 16px;
  color: ${colors.gray};
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    border-color: ${colors.lightGray};
  }
`;
