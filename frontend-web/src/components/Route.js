import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function RouteWrapper({ page: Page, path, exact, isPrivate }) {
  const signed = !!localStorage.getItem('ongId');

  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/dashboard" />;

  return (
    <Route
      path={path}
      exact={exact}
      render={({ history, location, match }) => (
        <Page history={history} location={location} match={match} />
      )}
    />
  );
}

RouteWrapper.propTypes = {
  page: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  exact: false,
  isPrivate: false,
};
