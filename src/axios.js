import axios from 'axios'
import {baseUrl} from './Constants/Constant'

const instace = axios.create({
  baseURL: baseUrl
})

export default instace