import axios,{AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"
 const axiosInstance: AxiosInstance = axios.create({
    withCredentials:true,
    baseURL: "http://localhost:3000",
    headers:{
        "Content-Type":"application/json"
    }
 })

    interface FailedRequests {
        resolve: (value: AxiosResponse) => void;
        reject: (value: AxiosError) => void;
        config: AxiosRequestConfig;
        error: AxiosError;
    }

    let failedRequests: FailedRequests[] = [];
    let isTokenRefreshing = false;

 axiosInstance.interceptors.request.use((request) =>{
        const token = localStorage.getItem('user')
        if(token){
            const {access_token} = JSON.parse(token);
            request.headers['Authorization'] = `Bearer ${access_token}`       
        }
        return request;
} )

 axiosInstance.interceptors.response.use(
    (response)=> response,
    async (error: AxiosError)=>{

        const status = error.response?.status;
        const originalRequestConfig = error.config!;


        if(error.response && status === 401){

            if (isTokenRefreshing) {
                return new Promise((resolve, reject) => {
                  failedRequests.push({
                    resolve,
                    reject,
                    config: originalRequestConfig,
                    error: error,
                  });
                });
              }

              isTokenRefreshing = true

            try{
                const response = await axiosInstance.post("/auth/refresh",{
                    refresh: JSON.parse(localStorage.getItem('refresh_token') ?? ""),
                })
                const {accessToken=null, refreshToken=null} = response.data ?? {}
                if(!accessToken || !refreshToken){
                    throw new Error("Something went wrong.")
                }
                localStorage.setItem("access_token", JSON.stringify(accessToken));
                localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
                failedRequests.forEach(({ resolve, reject, config }) => {
                    axiosInstance(config)
                      .then((response) => resolve(response))
                      .catch((error) => reject(error));
                  });
            } catch (_error: unknown) {
                console.error(_error);
                failedRequests.forEach(({ reject, error }) => reject(error));
                localStorage.setItem("access_token", "");
                localStorage.setItem("refresh_token", "");
                return Promise.reject(error);
              } finally {
                failedRequests = [];
                isTokenRefreshing = false;
              }
          
              return axiosInstance(originalRequestConfig);

        }
        return Promise.reject(error)
    }
 )

 export default axiosInstance