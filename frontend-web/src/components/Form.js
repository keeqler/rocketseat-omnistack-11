import styled from 'styled-components';

import { Form as _Form } from '@rocketseat/unform';

export default styled(_Form)`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    height: 60px;
    margin-top: 10px;
    padding: 12px;
    font-size: 18px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    color: var(--title-secondary);
    background: var(--input);

    ::placeholder {
      color: var(--text-secondary);
    }

    :first-child {
      margin-top: 0;
    }
  }

  textarea {
    height: 180px;
    resize: none;
  }

  button[type='submit'] {
    margin-top: 10px;
  }

  span {
    margin: 4px 0;
    color: var(--primary);
  }
`;
