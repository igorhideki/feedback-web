import styled from 'styled-components';
import ReactSelect from 'react-select';

import colors from '../../styles/colors';

export const Container = styled.div`
  h2 {
    color: ${colors.secondary};
  }

  p {
    color: ${colors.darkGray};
  }

  form {
    margin-top: 16px;

    button {
      margin-top: 16px;
    }
  }
`;

export const SelectWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SelectLabel = styled.label`
  font-weight: bold;
  color: ${colors.gray};
  margin-bottom: 4px;
  display: block;
`;

export const Select = styled(ReactSelect)`
  > div {
    border: 0;
    color: ${colors.darkGray};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;

export const Error = styled.span`
  color: ${colors.danger};
  font-size: 14px;
  margin-top: -10px;
  display: block;
`;
