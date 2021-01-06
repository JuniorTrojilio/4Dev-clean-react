import { RequiredFieldError } from '../errors'
import { FieldValidation } from './protocols/field-validation'

export class RequiredFieldValidation implements FieldValidation {
  readonly fieldName: string
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (value: string): Error {
    return new RequiredFieldError()
  }
}
