// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://test.diligo.vn:15000/api/v1/"
// })

// const getConfig = () => {
//     const accessToken = localStorage.getItem("accessToken")
//     console.log(typeof accessToken)
//     const author = 'Bearer ' + accessToken.substring(1, accessToken.length - 1)
//     console.log(author)
//     console.log(localStorage.getItem("accessToken"))
//     return {
//         headers: {
//             'Content-Type': 'application/json',
//             "Authorization": `${author}`
//         }
//     }
// }

// const search = url => {
//     return axiosInstance.get(url, getConfig())
// }

// const getJobs = url => (
//     axiosInstance.get(`/${url}`)
// )



// export default {
//     search,
//     getJobs
// }