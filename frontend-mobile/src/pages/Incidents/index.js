import React, { useState, useCallback, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import Description from '~/components/Description';
import Header from '~/components/Header';
import IncidentContent from '~/components/Incident';
import Title from '~/components/Title';

import {
  Container,
  IncidentList,
  Incident,
  IncidentDetailsButton,
  IncidentDetailsButtonText,
} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [incidentTotal, setIncidentTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { navigate } = useNavigation();

  async function fetchIncidents() {
    if (loading || (incidentTotal > 0 && incidents.length === incidentTotal))
      return;

    setLoading(true);

    const { data, headers } = await api.get(`incidents?page=${page}`);

    setIncidents([...incidents, ...data]);
    // eslint-disable-next-line radix
    setIncidentTotal(parseInt(headers['x-total-count']));
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    fetchIncidents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header incidentTotal={incidentTotal} />
      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchIncidents}
        onEndReachedThreshold={0.1}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentContent data={incident} />
            <IncidentDetailsButton
              onPress={() => navigate('Detail', { incident })}
            >
              <IncidentDetailsButtonText>
                Ver mais detalhes
              </IncidentDetailsButtonText>
              <Feather name="arrow-right" size={20} color="#FFF" />
            </IncidentDetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
