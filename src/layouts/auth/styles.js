import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #fbfdff, #e7f3ff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 316px;
  text-align: center;

  h1 {
    color: ${colors.primary};
  }

  form {
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${colors.darkGray};
      margin: 0 0 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    span {
      margin-bottom: 10px;
      align-self: flex-start;
      color: ${colors.danger};
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      justify-content: center;
    }
  }
`;
