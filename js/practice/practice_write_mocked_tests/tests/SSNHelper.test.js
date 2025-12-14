//import { SSNHelper } from '../src/correct/SSNHelper'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; // done
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'; // done
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'; // done
//import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'; // done
import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'; // done



describe('SSNHelpe Tests', () => {
test('Should return true for day 31', () => {
  const helper = new SSNHelper()
  expect(helper.isValidDay('31')).toBe(true);
})

test('Should return false for month 0', () => {
    const helper = new SSNHelper()
    expect(helper.isValidMonth('0')).toBe(false)
})

test('Should return false for invalid format without dash', () => {
  const helper = new SSNHelper()
  expect(helper.isCorrectFormat('12345678901')).toBe(false)
})

test('Should return true for valid SSN with Luhn checksum', () => {
  const helper = new SSNHelper()
  expect(helper.luhnisCorrect('811228-9874')).toBe(true)
})

test('Should return false for SSN longer than 11 characters', () => {
  const helper = new SSNHelper()
  expect(helper.isCorrectLength('811228-98745')).toBe(false)
})
})