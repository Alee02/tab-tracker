// Setting up a connector to hit-up the backend
import axios from 'axios'

//  have Api.js give back a connector
export default () => {
  return axios.create({
    //  Creating a axios object to point to backend URL
    baseURL: 'http://localhost:8081/'
  })
}
