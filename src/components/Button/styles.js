import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: ${props => {
    if (props.secondary) {
      return '#4DBAF9';
    }
    if (props.danger) {
      return '#D44059';
    }
    return '#f94d6a';
  }};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 42px;
  padding: 0 21px;
  border-radius: 4px;
  transition: background 0.2s;
  border: 0;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => {
      if (props.secondary) {
        return darken(0.08, '#4DBAF9');
      }
      if (props.danger) {
        return darken(0.03, '#D44059');
      }
      return darken(0.03, '#f94d6a');
    }};
  }

  > svg {
    margin-right: 6px;
  }
`;
