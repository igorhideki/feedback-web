import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, color, onClick, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container color={color} onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '',
  onClick: () => {},
};
