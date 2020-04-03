import { celebrate, Joi } from 'celebrate';

export default {
  store: celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
    headers: Joi.object({
      authorization: Joi.number().required(),
    }).unknown(),
  }),

  index: celebrate({
    query: Joi.object().keys({ page: Joi.number().required() }),
  }),

  delete: celebrate({
    params: Joi.object().keys({
      id: Joi.number().required(),
    }),
    headers: Joi.object({
      authorization: Joi.number().required(),
    }).unknown(),
  }),
};
