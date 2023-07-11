import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.100.4:3333' // url base de onde o server esta rodando
})

export { api }