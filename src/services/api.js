import axios from 'axios'
const shopApi = axios.create({
  baseURL: 'http://localhost:1337/api',
})
export default shopApi
