import axios from 'axios'

export default axios.create({
  baseURL: 'https://6083df209b2bed00170404a0.mockapi.io/angular/',
  headers: {
    'Content-type': 'application/json'
  }
})
