import axios from "axios";
import qs from 'qs';

export const securityLogoin = obj => axios.post('/api/security/login', obj)

export const userLogout = obj => axios.get('/api/security/logout', { params: obj }) 

export const addUser = obj => axios.post('/api/user/add', obj)

export const userList = obj => axios.get('/api/user/list', { params: obj })

export const delUserByName = obj => axios.delete(`/api/user/delete/${obj.username}`)

export const findOneByUsername = obj => axios.get(`/api/user/findOneByUsername/${obj.username}`)

