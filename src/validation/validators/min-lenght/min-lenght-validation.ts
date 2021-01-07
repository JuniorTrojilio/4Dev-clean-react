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
    return value.length >= this.minLenght ? null : new InvalidFieldError(this.fieldName)
  }
}
