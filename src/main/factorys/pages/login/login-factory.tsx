import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factorys/usecases/authentication/remote-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'

export const MakeLogin: React.FC = () => {
  return (
    <Login
    authentication={makeRemoteAuthentication('/login')}
    validation={makeLoginValidation()}
    />
  )
}
