import React from 'react';
import PropTypes from 'prop-types';

import RadioInput from '../RadioInput';
import { Container, Wrapper } from './styles';

export default function RadioGroup({ name, title, onChange }) {
  const ratings = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  return (
    <Container>
      <span>{title}</span>
      <Wrapper>
        {ratings.map(rating => (
          <RadioInput
            name={name}
            label={rating.label}
            value={rating.value}
            onChange={() => onChange(rating.value)}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
