import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';
import Button from '../../components/Button';
import RadioGroup from '../../components/RadioGroup';
import Textarea from '../../components/Textarea';
import { Container } from './styles';

export default function Feedback({ match }) {
  const [productivity, setProductivity] = useState('');
  const [organization, setOrganization] = useState('');
  const [flexibility, setFlexibility] = useState('');
  const [teamWork, setTeamWork] = useState('');
  const [leadership, setLeadership] = useState('');
  const [observation, setObservation] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      productivity,
      organization,
      flexibility,
      leadership,
      observation,
      team_work: teamWork,
    };
    try {
      await api.post(`reviews/${match.params.id}/feedbacks`, data);
      toast.success('Avaliação realizada com sucesso!');
      history.push('/');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <h2>Avaliação</h2>
      <p>
        Esta avaliação é divida entre categorias, onde é possível escolher{' '}
        <strong>notas</strong>
        de <strong>1 à 5</strong>, onde 1 significa pouco qualificado e 5 muito
        qualificado. Também é possível deixar observações que você ache
        relevante sobre o funcionário.
      </p>
      <form onSubmit={handleSubmit}>
        <RadioGroup
          name="productivity"
          title="Produtividade"
          onChange={setProductivity}
        />

        <RadioGroup
          name="organization"
          title="Organização"
          onChange={setOrganization}
        />

        <RadioGroup
          name="flexibility"
          title="Flexibilidade"
          onChange={setFlexibility}
        />

        <RadioGroup
          name="teamWork"
          title="Trabalho em equipe"
          onChange={setTeamWork}
        />

        <RadioGroup
          name="leadership"
          title="Liderança"
          onChange={setLeadership}
        />

        <Textarea
          name="observation"
          label="Observações"
          onChange={setObservation}
        />

        <Button type="submit">Salvar avaliação</Button>
      </form>
    </Container>
  );
}

Feedback.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
