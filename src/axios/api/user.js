import axios from "axios";

// 登录
export const securityLogoin = obj => axios.post('/api/security/login', obj)

// 登出
export const userLogout = obj => axios.get('/api/security/logout', { params: obj }) 

// 新增用户(用户名)
export const addUser = obj => axios.post('/api/user/add', obj)

// 获取用户列表
export const userList = obj => axios.get('/api/user/list', { params: obj })

// 删除用户
export const delUserByName = obj => axios.delete(`/api/user/delete/${obj.username}`)

// 新增用户(用户名
export const findOneByUsername = obj => axios.get(`/api/user/findOneByUsername/${obj.username}`)

// 改变用户状态
export const changeSymbol = obj => axios.post('/api/user/changeSymbol', obj)

// 分配角色
export const grantRole = obj => axios.post(`/api/user/grantRole`,obj)