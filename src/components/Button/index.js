import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children }){
  return <Container>{children}</Container>
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}