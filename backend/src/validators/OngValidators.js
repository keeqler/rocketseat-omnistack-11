import { celebrate, Joi } from 'celebrate';

export default {
  store: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().length(11),
      city: Joi.string().required(),
      state: Joi.string().length(2),
    }),
  }),
};
