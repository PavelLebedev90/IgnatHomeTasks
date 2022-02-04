import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:`https://neko-cafe-back.herokuapp.com/auth/`
})

export const requestsAPI = {
    onChangeChecked(success:boolean){
        return axiosInstance.post(`test`, {success})
    }
}