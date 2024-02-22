import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://kids-kingdom-server.vercel.app'
})

const UseAxiosPublic=()=>{
    return axiosPublic
}
export default UseAxiosPublic;