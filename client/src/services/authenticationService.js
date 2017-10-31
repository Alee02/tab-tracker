import Api from '@/Services/Api'

//  AuthenticationService.js is going to export an object
//  that has a register method to it.
//
export default {
  //  object to allow us to call register method, to hit the register endpoint
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// Example of how to call the AuthenticationService
// AuthenticationService.register( {
//   email: 'test@gmail.com',
//   password: 'password'
// })
