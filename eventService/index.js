import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://private-90552-schoterspersonal.apiary-mock.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient
