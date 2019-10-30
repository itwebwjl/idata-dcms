import axios from "axios";

// export const securityLogoin = obj => axios.post('/api/role/list', obj)

export const getRoleList = obj => axios.get('/api/role/list', { params: obj }) 

export const findAllRole = obj => axios.get('/api/role/findAllRole', {params :obj}) 

export const findOneByRoleId = obj => axios.get(`/api/role/findOneByRoleId/${obj.roleId}`)

export const findAllPower = obj => axios.get("/api/role/findAllPower", {params:obj}) 

export const addRole = obj => axios.post("/api/role/add", obj)

export const editRole = obj => axios.post("/api/role/update", obj)

export const deleteRole = obj => axios.delete(`/api/role/delete/${obj.roleId}`)

export const upDateRole = obj => axios.post(`/api/role/update`,obj) 