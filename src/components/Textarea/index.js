import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Textarea({ name, label, value, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        rows="8"
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
