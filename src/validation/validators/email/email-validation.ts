import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  fieldName: string
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (value: string): Error {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(value).toLowerCase()) ? null : new InvalidFieldError(this.fieldName)
  }
}
