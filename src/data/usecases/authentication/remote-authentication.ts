import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  private readonly url
  private readonly httpPostClient
  constructor (url: string, httpPostClient: HttpPostClient) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth (): Promise<void> {
    await this.httpPostClient.post(this.url)
  }
}
