import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--background);
  background: var(--primary);
  cursor: pointer;
  transition: filter 300ms ease;

  :hover {
    filter: brightness(90%);
  }
`;
