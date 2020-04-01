import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 20px;
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const IncidentList = styled(FlatList)`
  margin-top: 32px;
  flex: 1;
`;

export const Incident = styled.View`
  margin-bottom: 16px;
`;

export const IncidentDetailsButton = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #e02041;
`;

export const IncidentDetailsButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
