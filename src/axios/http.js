import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8000'
})
  //响应拦截器
instance.interceptors.response.use(response => {
    if(response.status == 200){
        return response.data
    }
});
export default instance