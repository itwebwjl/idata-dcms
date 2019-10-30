import axiso from "axios";

export const getAppList = (obj) => axiso.get("/api/application/list", { params: obj })

export const deleteApp = (obj) => axiso.delete(`/api/application/delete/${obj.applicationId}`)