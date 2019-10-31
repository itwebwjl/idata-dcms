import axios from "axios";

// 获取角色列表
export const getRoleList = obj => axios.get('/api/role/list', { params: obj }) 

// 获取所有角色
export const findAllRole = obj => axios.get('/api/role/findAllRole', {params :obj}) 

// 根据角色id查询单个角色信息及其权限信息
export const findOneByRoleId = obj => axios.get(`/api/role/findOneByRoleId/${obj.roleId}`)

// 查询所有角色信息
export const findAllPower = obj => axios.get("/api/role/findAllPower", {params:obj}) 

// 增加角色
export const addRole = obj => axios.post("/api/role/add", obj)

// 编辑角色
export const editRole = obj => axios.post("/api/role/update", obj)

// 删除角色
export const deleteRole = obj => axios.delete(`/api/role/delete/${obj.roleId}`)

// 更新角色
export const upDateRole = obj => axios.post(`/api/role/update`, obj) 

