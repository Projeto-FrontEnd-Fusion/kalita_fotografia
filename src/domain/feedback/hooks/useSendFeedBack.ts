import { useMutation } from "@tanstack/react-query"
import type { FeedbackSchemaType } from "../schemas/feedbackSchema"
import type { AxiosInstance } from "axios"
import { ApiInstance } from "@/domain/apiInstance"
import type { ApiFeedBackResponse } from "../responseTypes"



export interface FeedbackRepository {
  create(feedback_data : FeedbackSchemaType):Promise<ApiFeedBackResponse>
}

class FeedBackService implements FeedbackRepository {
  constructor(private readonly httpFeedackClient: AxiosInstance ){}
  async create(feedback_data: FeedbackSchemaType): Promise<any> {
    const {data} = await this.httpFeedackClient.post('/feedbacks', feedback_data)
    return data
  }


}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string
const apiinstance = ApiInstance.getInstance(API_URL)
const useServiceFeedback = new FeedBackService(apiinstance)


export const useSendFeedBack = () =>{
  const service =  useServiceFeedback
  const {mutate, isPending, isError} = useMutation<ApiFeedBackResponse, unknown, FeedbackSchemaType>({
    mutationFn : (data) => service.create(data)
  })

  return {mutate, isPending, isError}
}