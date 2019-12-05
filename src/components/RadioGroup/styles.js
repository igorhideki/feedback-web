import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  span {
    font-weight: bold;
    color: ${colors.gray};
    margin-bottom: 4px;
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  > div + div {
    margin-left: 24px;
  }
`;
