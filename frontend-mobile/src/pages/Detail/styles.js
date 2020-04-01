import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 20px;
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1;
`;

export const Contact = styled.View`
  padding: 16px;
  border-radius: 8px;
  background: #fff;
`;

export const ButtonContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #e02041;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
