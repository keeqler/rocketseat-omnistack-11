import { celebrate, Joi } from 'celebrate';

export default {
  index: celebrate({
    headers: Joi.object({
      authorization: Joi.number().required(),
    }).unknown(),
  }),
};
