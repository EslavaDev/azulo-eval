import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
  
  
  export class ApiConfig {
    static create(config: AxiosRequestConfig<any> | undefined) {
      const timeout = Number(
        process.env.REACT_APP_MAX_TIMEOUT || axios.defaults.timeout,
      );
      console.log(process.env.REACT_APP_URL)
      const instance = axios.create({
        baseURL: process.env.REACT_APP_URL,
        timeout,
        ...config,
      });
      this.initInterceptors(instance);
      return instance;
    }
  
    static initInterceptors(instance: AxiosInstance) {
      instance.interceptors.response.use(
        (response: { status: number; }) => {
          if (response.status === 401) {
            localStorage.clear();
            sessionStorage.clear();
          } else {
            return response;
          }
        },
        (error: { response: { data: { error: any; }; }; }) => {
          if (error && axios.isAxiosError(error)) {
            const errorMessage = error?.response?.data?.error;
            throw errorMessage;
          } else {
            throw error;
          }
        },
      );
    }
  
    static async addHeaders() {
      
      return {};
    }
  }
  