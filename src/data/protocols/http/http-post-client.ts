import { HttpResponse } from '.'

export type HttpPostParams<T = any> = {
  url: string,
  body?: T
}

export interface HttpPostClient<T, R>{
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
