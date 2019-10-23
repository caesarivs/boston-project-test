const Auth = require('@aws-amplify/auth').default

const register = async (req, res) => {
  try {
    const response = await Auth.signUp({
      username: req.body.email,
      password: req.body.password,
      attributes: {
        email: req.body.email,
        name: req.body.name,
        'custom:account_type': req.body.account_type
      },
    })
    return res.status(201).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const resend = async (req, res) => {
  try {
    const response = await Auth.resendSignUp(req.body.email)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const confirm = async (req, res) => {
  try {
    const response = await Auth.confirmSignUp(req.body.email, req.body.code)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const login = async (req, res) => {
  try {
    const response = await Auth.signIn({
      username: req.body.email,
      password: req.body.password
    })
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const logout = async (req, res) => {
  try {
    const response = await Auth.signOut()
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const recoverPassword = async (req, res) => {
  try {
    const response = await Auth.forgotPassword(req.body.email)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

const resetPassword = async (req, res) => {
  try {
    const response = await Auth.forgotPasswordSubmit(req.body.email, req.body.code, req.body.password)
    return res.status(200).send(response)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  register,
  confirm,
  resend,
  login,
  logout,
  recoverPassword,
  resetPassword
}
