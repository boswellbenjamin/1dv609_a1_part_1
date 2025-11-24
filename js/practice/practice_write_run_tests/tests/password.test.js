
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame' // Done
// import { Password } from '../src/BugMissingNumberCheck' // Done
// import { Password } from '../src/BugMissingPasswordCheck' // Done
// import { Password } from '../src/BugNeverContainsNumbers' //Done
// import { Password } from '../src/BugToShortPassword' // Done
// import { Password } from '../src/BugVeryShort' // Done
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage' // Done
 import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const passwordNoNumber = 'passwordwithoutnumber'
    const shortPassword = 'shortpass'
    const almostCorrectPassword = "thisiseleve"
    const passwordWithNumber = "thisispassword123"

   test('Should throw No number found for password without number', () => {
    expect(() => {
       new Password(passwordNoNumber)}).toThrow('No number found')
    })

    test('Should throw error for too short password, and show correct error message', () => {
        expect(() => {
            new Password(shortPassword)}).toThrow('Too short password')
    })

    test('Should throw error for too short password', () => {
        expect(() => {
            new Password(almostCorrectPassword)}).toThrow('Too short password')
    })

    test('Should accept password with number', () => {
        expect (() => {
            new Password(passwordWithNumber)}).not.toThrow()
    })

    test('Should not accept same password twice', () => {
    const pw1 = new Password('ladjalksjdalksjdklas1')
    const pw2 = new Password('jhdfkljshfklajsdf2')
        expect(pw1.isPasswordSame(pw2)).toBe(false)
    })
});