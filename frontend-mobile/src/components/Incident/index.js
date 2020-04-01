import React from 'react';

import PropTypes from 'prop-types';

import { Container, IncidentProp, IncidentValue } from './styles';

export default function Incident({ data, detailed }) {
  const { name, city, state, title, description, value } = data;

  return (
    <Container detailed={detailed}>
      <IncidentProp>ONG:</IncidentProp>
      <IncidentValue>
        {name} de {city} - {state.toUpperCase()}
      </IncidentValue>
      <IncidentProp>CASO:</IncidentProp>
      <IncidentValue>{title}</IncidentValue>
      {detailed && (
        <>
          <IncidentProp>DESCRIÇÃO:</IncidentProp>
          <IncidentValue>{description}</IncidentValue>
        </>
      )}
      <IncidentProp>VALOR:</IncidentProp>
      <IncidentValue last>R$ {value},00</IncidentValue>
    </Container>
  );
}

Incident.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  detailed: PropTypes.bool,
};

Incident.defaultProps = {
  detailed: false,
};
