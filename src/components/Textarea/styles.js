import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  label {
    font-weight: bold;
    color: ${colors.gray};
    margin-bottom: 4px;
    display: block;
  }

  textarea {
    width: 100%;
    background: #fff;
    border: 0;
    border-radius: 4px;
    padding: 15px;
    color: ${colors.darkGray};
    margin: 0 0 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    font-size: 14px;
  }
`;
