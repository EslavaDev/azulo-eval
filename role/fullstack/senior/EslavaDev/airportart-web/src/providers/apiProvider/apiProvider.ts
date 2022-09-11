import { AxiosInstance } from 'axios';
import { snakeCaseKeys } from '../../utils';
import {ApiConfig} from './apiConfig';

export class ApiProvider {
    static instance: ApiProvider;
   apiInstance!: AxiosInstance;

  static getInstance() {
    if (!ApiProvider.instance) {
      ApiProvider.instance = new ApiProvider();
    }
    return this.instance;
  }

  initProvider(config = {}) {
    this.apiInstance = ApiConfig.create(config);
  }

  async get(
    url: any,
    config?: any,
  ) {
    return await this.apiInstance.get(url, {
      headers: await ApiConfig.addHeaders(),
      ...config,
    });
  }

  async post(
    url: any,
    data: any,
  ) {
    return await this.apiInstance.post(url, data, {
      headers: await ApiConfig.addHeaders(),
    });
  }

  async postAndSerialize(
    url: any,
    data: any,
  ) {
    const serializedData = snakeCaseKeys(data);
    return await this.apiInstance.post(url, serializedData, {
      headers: await ApiConfig.addHeaders(),
    });
  }

  async put(
    url: any,
    data: any,
  ) {
    return await this.apiInstance.put(url, data, {
      headers: await ApiConfig.addHeaders(),
    });
  }

  async putAndSerialize(
    url: any,
    data: any,
  ) {
    const serializedData = snakeCaseKeys(data);
    return await this.apiInstance.put(url, serializedData, {
      headers: await ApiConfig.addHeaders(),
    });
  }

  async delete(
    url: any,
    data: any,
  ) {
    return await this.apiInstance.delete(url, {
      data,
      headers: await ApiConfig.addHeaders(),
    });
  }
}
