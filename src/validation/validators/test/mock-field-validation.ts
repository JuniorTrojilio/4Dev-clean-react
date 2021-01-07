import { FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  fieldName: string
  error: Error = null
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (value: string): Error {
    return this.error
  }
}
