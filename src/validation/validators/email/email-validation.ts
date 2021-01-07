import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  fieldName: string
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (value: string): Error {
    return new InvalidFieldError(this.fieldName)
  }
}
