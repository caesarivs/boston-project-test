const Joi = require('@hapi/joi')

const register = async (req, res, next) => {
  const schema = Joi.object({
    account_type: Joi.string().valid("Admin", "Manager").required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
  
  try {
    // const value = 
    await schema.validateAsync(req.body)
  } catch (error) {
    switch (error.details[0].context.key) {
      case 'account_type':
      res.status(400).send({
        error: 'Account type can only be either "Admin" or "Manager"'
      })
      break
      case 'name':
      res.status(400).send({
        error: 'Name not valid'
      })
      break
      case 'email':
      res.status(400).send({
        error: 'You must provide a valid email address'
      })
      break
      case 'password':
      res.status(400).send({
        error: 'Password not valid'
      })
      break
      default:
      res.status(400).send({
        error: 'Invalid register information'
      })
    }
  }
  
  next()
}

module.exports = {
  register
}
