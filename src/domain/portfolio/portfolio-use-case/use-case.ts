import type { AxiosInstance, AxiosResponse } from "axios";
import type { IPortfolioRepository } from "../interfaces/portfolio-interface";
import type { CloudinaryResponse, PhotoInDb, RequestPortfolio, SuccessPortfolioResponse } from "../entities/portfolio-entities";

export class PortfolioService implements IPortfolioRepository {
  private httpPortfolioIntance: AxiosInstance;

  constructor(apiPortfolio: AxiosInstance) {
    this.httpPortfolioIntance = apiPortfolio;
  }

  async uploadMultiples(
    uploadFiles: RequestPortfolio
  ): Promise<SuccessPortfolioResponse> {
    const response = await this.httpPortfolioIntance.post(
      "/portfolio/upload-multiples-images",
      uploadFiles
    );
    return response.data;
  }

  async getAllPortfolioPhotos():Promise<PhotoInDb[]>{
    const response = await this.httpPortfolioIntance.get("/portfolio") as AxiosResponse<CloudinaryResponse>
    console.log(response.data)
    return response.data.data
  }
}
