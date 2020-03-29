import React, { useState, useEffect } from 'react';
import { FiPower, BsTrash, MdClose } from 'react-icons/all';
import ReactRouterPropTypes from 'react-router-prop-types';
import { CSSTransition } from 'react-transition-group';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';

import logo from '~/assets/logo.svg';

import Button from '~/components/Button';

import {
  Container,
  Header,
  HeaderButtonsContainer,
  NewIncidentButton,
  LogoutButton,
  IncidentsContainer,
  IncidentsContent,
  Incident,
  DeleteButton,
  Modal,
  ModalContainer,
  ModalCloseButtonWrapper,
  Form,
  Overlay,
} from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Este campo é obrigatório'),
  description: Yup.string().required('Este campo é obrigatório'),
  value: Yup.number()
    .typeError('Você deve fornecer um valor em reais')
    .min(1, 'Você deve fornecer um valor em reais')
    .required('Este campo é obrigatório'),
});

export default function Dashboard({ history }) {
  const [incidents, setIncidents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('ong_incidents', {
          headers: { authorization: localStorage.getItem('ongId') },
        });

        setIncidents(data.reverse());
      } catch (error) {
        //
      }
    })();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'unset';
  }, [showModal]);

  function handleLogout() {
    localStorage.setItem('ongId', '');
    history.push('/');
  }

  async function handleSubmit(data) {
    try {
      const response = await api.post('incidents', data, {
        headers: { authorization: localStorage.getItem('ongId') },
      });

      setIncidents([{ id: response.data.id, ...data }, ...incidents]);
      setShowModal(false);
    } catch (error) {
      //
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { authorization: localStorage.getItem('ongId') },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      //
    }
  }

  return (
    <>
      <Modal>
        <CSSTransition
          classNames="modal"
          in={showModal}
          timeout={280}
          unmountOnExit
        >
          <ModalContainer>
            <ModalCloseButtonWrapper>
              <MdClose
                size={32}
                color="var(--text-secondary)"
                style={{ float: 'right', cursor: 'pointer' }}
                onClick={() => setShowModal(false)}
              />
            </ModalCloseButtonWrapper>
            <Form onSubmit={handleSubmit} schema={schema}>
              <h1 style={{ margin: '20px 0', textAlign: 'center' }}>
                Cadastrar novo caso
              </h1>
              <Input name="title" placeholder="Título do caso" />
              <Input name="description" placeholder="Descrição" multiline />
              <Input name="value" placeholder="Valor em reais" type="number" />
              <Button text="Cadastrar" type="submit" />
            </Form>
          </ModalContainer>
        </CSSTransition>
        <CSSTransition
          classNames="overlay"
          in={showModal}
          timeout={280}
          unmountOnExit
        >
          <Overlay onClick={() => setShowModal(false)} />
        </CSSTransition>
      </Modal>
      <Container blur={showModal}>
        <Header>
          <img src={logo} style={{ height: 60 }} alt="" />
          <HeaderButtonsContainer>
            <NewIncidentButton
              text="Cadastrar novo caso"
              onClick={() => setShowModal(true)}
            />
            <LogoutButton onClick={handleLogout}>
              <FiPower size={24} color="var(--primary)" />
            </LogoutButton>
          </HeaderButtonsContainer>
        </Header>
        <IncidentsContainer>
          <h1>Casos cadastrados</h1>
          <IncidentsContent>
            {incidents.map(({ id, title, description, value }) => (
              <Incident key={id}>
                <DeleteButton onClick={() => handleDelete(id)}>
                  <BsTrash size={24} color="var(--text-secondary)" />
                </DeleteButton>
                <strong>CASO:</strong>
                <span>{title}</span>
                <strong>DESCRIÇÃO:</strong>
                <span>{description}</span>
                <strong>VALOR:</strong>
                <span>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(value)}
                </span>
              </Incident>
            ))}
          </IncidentsContent>
        </IncidentsContainer>
      </Container>
    </>
  );
}

Dashboard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
