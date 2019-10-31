import axios from "axios";

// 获取操作日志
export const getLogsList = obj => axios.get('/api/opelogs/list', { params: obj })

// 获取监控日志
export const getMonitLogs = obj => axios.get('/api/monitlogs/list', { params: obj })


