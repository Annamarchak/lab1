import { expect, test } from 'vitest'
import { calculateDiscount, validateEmail, formatUserRole } from './logic'

test('Знижка: має правильно рахувати ціну', () => {
  expect(calculateDiscount(100, 10)).toBe(90)
})

test('Email: має знаходити символ @', () => {
  expect(validateEmail('test@mail.com')).toBe(true)
})

test('Роль: має повертати правильну назву', () => {
  expect(formatUserRole(true)).toBe("Адміністратор")
})