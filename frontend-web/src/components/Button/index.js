import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './styles';

export default function _Button({ text, ...props }) {
  return <Button {...props}>{text}</Button>;
}

_Button.propTypes = {
  text: PropTypes.string.isRequired,
};
