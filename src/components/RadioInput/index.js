import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function RadioInput({ name, value, onChange, label }) {
  return (
    <Container>
      <label htmlFor={name + value}>
        <input
          type="radio"
          name={name}
          id={name + value}
          value={value}
          onChange={onChange}
        />
        {label}
      </label>
    </Container>
  );
}

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
