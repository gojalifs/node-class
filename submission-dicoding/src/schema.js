const Joi = require("joi");

const bookSchema = Joi.object({
  name: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "any.empty":
            err.message = "Value should not be empty!";
            break;
          case "string.min":
            err.message = `Value should have at least ${err.local.limit} characters!`;
            break;
          case "string.max":
            err.message = `Value should have at most ${err.local.limit} characters!`;
            break;
          default:
            err.message = 'error'
            break;
        }
      });
      return errors;
    }),
});

module.exports = { bookSchema };
