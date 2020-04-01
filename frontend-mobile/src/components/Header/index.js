import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import logoImg from '~/assets/logo.png';

import { Container, IncidentTotal, IncidentTotalBold } from './styles';

export default function Header({ incidentTotal }) {
  const { navigate } = useNavigation();

  return (
    <Container>
      {incidentTotal === -1 && (
        // I figured out that when using the goBack() method we can get an error
        // if user do a double-tap, so I'm using the navigate() method here
        <TouchableOpacity onPress={() => navigate('Incidents')}>
          <Feather name="arrow-left" size={26} color="#E02041" />
        </TouchableOpacity>
      )}
      <Image source={logoImg} />
      {incidentTotal !== -1 && (
        <IncidentTotal>
          Total de <IncidentTotalBold>{incidentTotal} casos.</IncidentTotalBold>
        </IncidentTotal>
      )}
    </Container>
  );
}

Header.propTypes = {
  incidentTotal: PropTypes.number,
};

Header.defaultProps = {
  incidentTotal: -1,
};
