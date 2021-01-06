import { RequiredFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class RequiredFieldValidation implements FieldValidation {
  readonly fieldName: string
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
