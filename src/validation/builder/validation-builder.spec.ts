import { EmailValidation, MinLenghtValidation, RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const lenght = faker.random.number()
    const validations = sut.field(field).minLenght(lenght).build()
    expect(validations).toEqual([new MinLenghtValidation(field, lenght)])
  })

  test('should return a list of validations', () => {
    const field = faker.database.column()
    const lenght = faker.random.number()
    const validations = sut.field(field)
      .required()
      .minLenght(lenght)
      .email()
      .build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLenghtValidation(field, lenght),
      new EmailValidation(field)
    ])
  })
})
