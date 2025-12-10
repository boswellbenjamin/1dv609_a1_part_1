import { describe, test, expect, jest } from '@jest/globals'; 
// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber';  // Correct
// import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear' // Done
// import { SwedishSocialSecurityNumber } from '..src/bugs/BuggySwedishSocialSecutityNumberNoLunh' // Done?
// import { SwedishSocialSecurityNumber } from '..src/bugs/BuggySwedishSocialSecutityNumberNoTrim'
// import { SwedishSocialSecurityNumber } from '..src/bugs/BuggySwedishSocialSecutityNumberNoLenCheck'


//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {

test('Should return the correct year', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true)
    };

    ssn = new SwedishSocialSecurityNumber('980818-3470', mockHelper)

    expect(ssn.getYear()).toBe('98')
})

test('Should be correct luhn', () => {
    const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(false)
    }

    expect(() => {
        ssn = new SwedishSocialSecurityNumber('980818-3470', mockHelper)}).toThrow
})

test('Should return trimmed ssn', () => {
        const mockHelper = {
        isCorrectLength: jest.fn().mockReturnValue(true),
        isCorrectFormat: jest.fn().mockReturnValue(true),
        isValidMonth: jest.fn().mockReturnValue(true),
        isValidDay: jest.fn().mockReturnValue(true),
        luhnisCorrect: jest.fn().mockReturnValue(true)
    };

    const ssn = new SwedishSocialSecurityNumber(' 980818-3470', mockHelper)
    expect(ssn.getSerialNumber()).toBe('3470')
})
})