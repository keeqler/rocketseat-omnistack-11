import knex from 'knex';

import config from '../../knexfile';

export default knex(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);
