import styled from 'styled-components';

import _Button from '~/components/Button';
import _Form from '~/components/Form';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  filter: ${({ blur }) => (blur ? 'blur(8px);' : null)};
  transition: filter 300ms ease;
`;

export const Header = styled.header`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1152px) {
    flex-direction: column;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1152px) {
    margin-top: 20px;
  }
`;

export const NewIncidentButton = styled(_Button)`
  width: 260px;
  margin-right: 24px;
`;

export const LogoutButton = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid var(--input-border);
  border-radius: 8px;
  background: none;
  cursor: pointer;
`;

export const IncidentsContainer = styled.main`
  width: 100%;
  margin: 32px 0;

  h1 {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1152px) {
    h1 {
      text-align: center;
    }
  }
`;

export const IncidentsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 540px);
  grid-gap: 16px;

  @media screen and (max-width: 1152px) {
    justify-content: center;
    display: block;
  }
`;

export const Incident = styled.div`
  width: 100%;
  max-width: 540px;
  min-height: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  background: var(--input);

  strong {
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--title-secondary);
  }

  span {
    font-size: 18px;
    color: var(--text-primary);
    margin-bottom: 32px;
  }

  span:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1152px) {
    margin: 0 auto;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  @keyframes scaleFadeIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.4;
    }
  }

  .modal {
    &-enter {
      animation: scaleFadeIn 300ms ease;
    }

    &-exit {
      animation: scaleFadeIn 300ms ease;
      animation-direction: reverse;
    }
  }

  .overlay {
    &-enter {
      animation: fadeIn 300ms ease;
    }
    &-exit {
      animation: fadeIn 300ms ease;
      animation-direction: reverse;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 460px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: var(--background);
  z-index: 3;
  pointer-events: all;

  @media screen and (max-width: 460px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  height: 32px;
`;

export const Form = styled(_Form)`
  @media screen and (max-width: 460px) {
    justify-content: center;
    flex: 1;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
  z-index: 2;
  pointer-events: all;
`;
