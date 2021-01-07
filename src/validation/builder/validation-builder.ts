import { FieldValidation } from '@/validation/protocols'
import { EmailValidation, MinLenghtValidation, RequiredFieldValidation } from '@/validation/validators'

export class ValidationBuilder {
  private readonly fieldName: string
  private readonly validations: FieldValidation[]
  private constructor (fieldName: string, validations: FieldValidation[]) {
    this.fieldName = fieldName
    this.validations = validations
  }

  static field (fieldName: string) : ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  minLenght (lenght: number): ValidationBuilder {
    this.validations.push(new MinLenghtValidation(this.fieldName, lenght))
    return this
  }
}
