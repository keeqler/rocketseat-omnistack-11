import styled from 'styled-components';

import _Form from '~/components/Form';
import Link from '~/components/Link';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    padding: 20px 20px;
    justify-content: center;
    text-align: center;
  }
`;

export const DescriptionContainer = styled.section`
  width: 100%;
  max-width: 400px;
`;

export const Logo = styled.img`
  margin-bottom: 80px;

  @media screen and (max-width: 840px) {
    margin: 0 auto 40px;
    display: block;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Description = styled.span`
  font-size: 18px;
  line-height: 32px;
  color: var(--text-primary);
`;

export const LoginLinkDesktop = styled(Link)`
  margin-top: 60px;

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const LoginLinkMobile = styled(Link)`
  margin: 20px auto 0;

  @media screen and (min-width: 840px) {
    display: none;
  }
`;

export const Form = styled(_Form)`
  width: 100%;
  max-width: 440px;

  @media screen and (max-width: 840px) {
    margin-top: 40px;
  }
`;
