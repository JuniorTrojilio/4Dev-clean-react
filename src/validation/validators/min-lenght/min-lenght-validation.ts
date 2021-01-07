import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class MinLenghtValidation implements FieldValidation {
  fieldName: string
  minLenght: number
  constructor (fieldName: string, minLenght: number) {
    this.fieldName = fieldName
    this.minLenght = minLenght
  }

  validate (value: string): Error {
    return new InvalidFieldError(this.fieldName)
  }
}
