import axios, { AxiosInstance } from "axios";
import { baseUrl } from "./config";

export enum HttpMethod {
  "GET",
  "POST",
  "PUT",
  "DELETE",
}

export interface RequestBody {
  endpoint: string;
  method: string;
  data?: {};
}

class Request {
  req: AxiosInstance;

  constructor() {
    this.req = axios.create({
      baseURL: baseUrl,
      headers: { "Content-Type": "application/json", accept: "*/*" },
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });
  }

  async doRequest(endpoint: string, method: string, data?: {}) {
    return await this.req.request({
      method: method,
      url: endpoint,
      data: data,
    });
  }
}



export default Request;
