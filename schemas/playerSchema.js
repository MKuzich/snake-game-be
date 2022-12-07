const Joi = require("joi");

const schemaCreate = Joi.object({
  nickname: Joi.string().alphanum().max(30).required(),
  score: Joi.number().required(),
});

module.exports = { schemaCreate };
