import axiso from "axios";

// app列表
export const getAppList = (obj) => axiso.get("/api/application/list", { params: obj })

// 删除 app 
export const deleteApp = (obj) => axiso.delete(`/api/application/delete/${obj.applicationId}`)

// 新增应用 400  !!
export const addApp = (obj) => axiso.post(`/api/application/addApp`, obj) 