import { celebrate, Joi } from 'celebrate';

export default {
  store: celebrate({
    body: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
};
