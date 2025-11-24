
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck' // Done
// import { Password } from '../src/BugMissingPasswordCheck'
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
});