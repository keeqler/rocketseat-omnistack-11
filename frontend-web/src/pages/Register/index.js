import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import logo from '~/assets/logo.svg';

import Button from '~/components/Button';

import {
  Container,
  DescriptionContainer,
  Description,
  Logo,
  Title,
  LoginLinkDesktop,
  LoginLinkMobile,
  Form,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string()
    .required('Este campo é obrigatório')
    .email('Você deve fornecer um e-mail válido'),
  whatsapp: Yup.string()
    .required('Este campo é obrigatório')
    .min(11, 'Você deve fornecer um número válido'),
  city: Yup.string().required('Este campo é obrigatório'),
  state: Yup.string()
    .required('Este campo é obrigatório')
    .length(2, 'Você deve fornecer um sigla de estado válida'),
});

const LoginLinkContent = () => (
  <>
    <FiArrowLeft size={24} color="var(--primary)" />
    Voltar para a página de login
  </>
);

export default function Register({ history }) {
  async function handleSubmit(data) {
    try {
      const response = await api.post('ongs', data);

      localStorage.setItem('ongName', data.name);
      localStorage.setItem('ongId', response.data.id);
      history.push('/dashboard');
    } catch (error) {
      //
    }
  }

  return (
    <Container>
      <DescriptionContainer>
        <Logo src={logo} />
        <Title>Cadastro</Title>
        <Description>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </Description>
        <LoginLinkDesktop to="/">
          <LoginLinkContent />
        </LoginLinkDesktop>
      </DescriptionContainer>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input mas placeholder="Nome da ONG" name="name" />
        <Input placeholder="E-mail" name="email" />
        <Input placeholder="WhatsApp" name="whatsapp" />
        <Input placeholder="Cidade" name="city" />
        <Input placeholder="UF" name="state" />
        <Button text="Cadastrar" type="submit" />
      </Form>
      <LoginLinkMobile to="/">
        <LoginLinkContent />
      </LoginLinkMobile>
    </Container>
  );
}

Register.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
