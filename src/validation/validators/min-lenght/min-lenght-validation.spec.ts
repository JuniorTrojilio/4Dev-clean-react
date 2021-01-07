import { InvalidFieldError } from '@/validation/errors'
import { MinLenghtValidation } from './min-lenght-validation'

describe('MinLenghtValidation', () => {
  test('return error if valur is invalid', () => {
    const sut = new MinLenghtValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError('field'))
  })
})
