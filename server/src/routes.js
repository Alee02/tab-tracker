const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  //  get request for the 'status' endpoint
  app.post('/register',
  //  express middleware
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
