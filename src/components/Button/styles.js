import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../styles/colors'

export const Container = styled.button`
  background: ${props => {
    switch (props.type) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'danger':
        return colors.danger;
      default:
        return colors.primary;
    }
  }};
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  transition: background 0.2s;
  border: 0;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => {
      switch (props.type) {
        case 'primary':
          return darken(0.1, colors.primary);
        case 'secondary':
          return darken(0.1, colors.secondary);
        case 'danger':
          return darken(0.1, colors.danger);
        default:
          return darken(0.1, colors.primary);
      }
    }};
  }

  > svg {
    margin-right: 6px;
  }
`;
