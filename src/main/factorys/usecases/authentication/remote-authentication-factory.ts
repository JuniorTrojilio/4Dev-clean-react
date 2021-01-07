import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from '../../http'

export const makeRemoteAuthentication = (url: string): Authentication => {
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
