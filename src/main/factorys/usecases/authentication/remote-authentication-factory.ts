import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from '../../http'

export const makeRemoteAuthentication = (pathUrl: string): Authentication => {
  const url = `http://fordevs.herokuapp.com/api${pathUrl}`
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
