
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck' // Done
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort' // Done
// import { Password } from '../src/BugWrongHashingAlgorithm'
 import { Password } from '../src/BugWrongMessage' // Done
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    const passwordNoNumber = 'passwordwithoutnumber'
    const shortPassword = 'shortpass'

   test('Creating a Password without number should send No number found error', () => {
    expect(() => {
       new Password(passwordNoNumber)}).toThrow('No number found')
    })

    test('Should throw error for too short password, and show correct error message', () => {
        expect(() => {
            new Password(shortPassword)}).toThrow('Too short password')
    })
});