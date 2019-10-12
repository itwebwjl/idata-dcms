
// export default {
 
// };
import axios from './axios.js'
const Host = 'http://172.20.10.2:8088'

export const saveServicesBaseInfo = obj => axios.post(Host + '/api/sevices/saveServicesBaseInfo', obj)

