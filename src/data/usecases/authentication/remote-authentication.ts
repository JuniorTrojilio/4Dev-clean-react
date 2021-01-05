import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexcpected-error'
import { AccountModel } from '@/domain/models/account-model'
import { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  private readonly url
  private readonly httpPostClient
  constructor (url: string, httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
