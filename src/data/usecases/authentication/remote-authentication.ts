import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  private readonly url
  private readonly httpPostClient
  constructor (url: string, httpPostClient: HttpPostClient) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
