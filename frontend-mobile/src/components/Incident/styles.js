import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${({ detailed }) => (detailed ? '16px' : 0)};
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${({ detailed }) => (detailed ? '8px' : 0)};
  border-bottom-right-radius: ${({ detailed }) => (detailed ? '8px' : 0)};
  background: #fff;
`;

export const IncidentProp = styled.Text`
  font-weight: bold;
  color: #41414d;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  margin-bottom: ${({ last }) => (last ? '0' : '20px')};
  font-size: 16px;
  color: #737380;
`;
