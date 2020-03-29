import styled from 'styled-components';

import Link from '~/components/Link';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 840px) {
    justify-content: center;
    text-align: center;
  }
`;

export const FormContainer = styled.section`
  width: 100%;
  max-width: 360px;
`;

export const Logo = styled.img`
  margin-bottom: 120px;

  @media screen and (max-width: 840px) {
    margin: 0 auto 120px;
    display: block;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const RegisterLink = styled(Link)`
  margin-top: 20px;
`;

export const Heroes = styled.img`
  width: calc(100% - 380px);
  max-width: 590px;
  margin-left: 20px;
  align-self: center;

  @media screen and (max-width: 840px) {
    display: none;
  }
`;
