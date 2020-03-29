import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: var(--title-secondary);
  cursor: pointer;
  transition: all 300ms ease;
  transition-property: color, transform;

  :hover {
    color: var(--title-primary);
    transform: translateX(12px);
  }

  svg {
    margin-right: 8px;
  }

  @media screen and (max-width: 840px) {
    justify-content: center;
  }
`;
