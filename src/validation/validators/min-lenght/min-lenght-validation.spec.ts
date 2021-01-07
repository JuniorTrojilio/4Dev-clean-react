import { InvalidFieldError } from '@/validation/errors'
import { MinLenghtValidation } from './min-lenght-validation'
import faker from 'faker'

const makeSut = (): MinLenghtValidation => new MinLenghtValidation('field', 5)

describe('MinLenghtValidation', () => {
  test('should return error if valur is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError('field'))
  })

  test('should return error if valur is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
