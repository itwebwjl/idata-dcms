import axios from "axios";

export const getLogsList = obj => axios.get('/api/opelogs/list', { params: obj })

export const getMonitLogs = obj => axios.get('/api/monitlogs/list', { params: obj })


