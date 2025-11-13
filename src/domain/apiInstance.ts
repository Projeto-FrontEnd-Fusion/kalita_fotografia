import axios, { type AxiosInstance } from "axios";

export class ApiInstance {
  private static instance: AxiosInstance | null = null;
  private constructor() {}

  public static setupInstance(baseURL: string): AxiosInstance {
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  }

  public static getInstance(API_URL: string): AxiosInstance {
    if (!API_URL) {
      throw new Error("Falha ao obter URL da API");
    }

    if (!this.instance) {
      this.instance = this.setupInstance(API_URL); 
    }

    return this.instance;
  }
}
