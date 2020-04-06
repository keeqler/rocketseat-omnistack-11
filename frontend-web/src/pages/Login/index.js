import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import ReactRouterPropTypes from 'react-router-prop-types';
import { toast } from 'react-toastify';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import heroes from '~/assets/heroes.png';
import logo from '~/assets/logo.svg';

import Button from '~/components/Button';
import Form from '~/components/Form';

import {
  Container,
  FormContainer,
  Logo,
  Title,
  RegisterLink,
  Heroes,
} from './styles';

const schema = Yup.object().shape({
  id: Yup.string().required('Este campo é obrigatório'),
});

export default function Login({ history }) {
  async function handleSubmit(data) {
    try {
      const response = await api.post('sessions', data);

      localStorage.setItem('ongName', response.data.name);
      localStorage.setItem('ongId', data.id);
      history.push('/dashboard');
    } catch (error) {
      toast.error('Não foi possível achar uma ONG com esse ID');
    }
  }

  return (
    <Container>
      <FormContainer>
        <Logo src={logo} />
        <Title>Faça seu login</Title>
        <Form onSubmit={handleSubmit} schema={schema}>
          <Input placeholder="ID da ONG" name="id" />
          <Button text="Entrar" type="submit" />
        </Form>
        <RegisterLink to="/register">
          <FiLogIn size={24} color="var(--primary)" />
          Não tenho cadastro
        </RegisterLink>
      </FormContainer>
      <Heroes src={heroes} />
    </Container>
  );
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
