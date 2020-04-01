/* eslint-disable react/prop-types */
import React from 'react';
import { Linking } from 'react-native';

import * as MailComposer from 'expo-mail-composer';

import Description from '~/components/Description';
import Header from '~/components/Header';
import Incident from '~/components/Incident';
import Title from '~/components/Title';

import {
  Container,
  Contact,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

export default function Detail({ route: { params } }) {
  const { incident } = params;
  const { name, title, value, email, whatsapp } = incident;
  const message = `Olá ${name}, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de R$ ${value},00.`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${title}`,
      recipients: [email],
      body: message,
    });
  }

  function sendWhatsappMsg() {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
  }

  return (
    <Container>
      <Header />
      <Incident data={incident} detailed />
      <Contact>
        <Title style={{ fontSize: 20 }}>Salve o dia!</Title>
        <Title style={{ fontSize: 20 }}>Seja o herói deste caso.</Title>
        <Description>Entre em contato:</Description>
        <ButtonContainer>
          <Button onPress={sendWhatsappMsg}>
            <ButtonText>WhatsApp</ButtonText>
          </Button>
          <Button onPress={sendMail}>
            <ButtonText>E-mail</ButtonText>
          </Button>
        </ButtonContainer>
      </Contact>
    </Container>
  );
}
