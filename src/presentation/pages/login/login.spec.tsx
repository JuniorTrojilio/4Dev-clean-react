import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import { Validation } from '@/presentation/protocols/validation'
import { ValidationSpy } from '@/presentation/test'
import Login from './login'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  validationSpy: Validation
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  validationSpy.errorMessage = faker.random.words()
  const sut = render(<Login validation={validationSpy}/>)
  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const { sut, validationSpy } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationSpy.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })

  test('should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const email = faker.internet.email()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: email } })
    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })

  test('should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const password = faker.internet.password()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: password } })
    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })

  test('should show email error if Validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationSpy.errorMessage)
    expect(emailStatus.textContent).toBe('🔴')
  })
})