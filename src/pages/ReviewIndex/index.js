import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiEdit } from 'react-icons/fi';

import api from '../../services/api';
import history from '../../services/history';
import { Container, Review } from './styles';
import colors from '../../styles/colors';

export default function ReviewIndex() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await api.get('/reviews');

        setReviews(response.data);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }

    loadReviews();
  }, []);

  function handleNewFeedback(id) {
    history.push(`/feedback/${id}`);
  }

  return (
    <Container>
      <h2>Avaliações solicitadas</h2>
      <p>
        Está é a lista de funcionários <strong>agendados para você</strong>{' '}
        realizar uma avaliação.
      </p>

      <ul>
        {reviews.map(review => (
          <Review onClick={() => handleNewFeedback(review.id)} key={review.id}>
            <p>{review.reviewed.name}</p>
            <FiEdit size={20} color={colors.primary} />
          </Review>
        ))}
      </ul>
    </Container>
  );
}
