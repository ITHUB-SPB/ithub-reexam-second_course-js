import { describe, test, expect } from 'vitest'
import { hasCorrectElement } from './middle.task4'

describe('обработка базовых случаев', () => {
    test('[0.5] проверка на наличие положительного числа', ({ annotate }) => {
        annotate(0.5)

        const callbackFunction = (value) => value > 0

        expect(
            hasCorrectElement([1, -5, 0, 0.17, null], callbackFunction),
        ).toBe(true)

        expect(hasCorrectElement([-10, -5, 0, null], callbackFunction)).toBe(
            false,
        )
    })

    test('[0.5] проверка на наличие значений null или NaN', ({ annotate }) => {
        annotate(0.5)

        const callbackFunction = (value) =>
            value === null || Number.isNaN(value)

        expect(
            hasCorrectElement([1, -10, undefined, 0], callbackFunction),
        ).toBe(false)

        expect(
            hasCorrectElement([Number('abc'), 10, 5], callbackFunction),
        ).toBe(true)
        
        expect(hasCorrectElement([10, null, 5], callbackFunction)).toBe(true)
    })

    test('[0.5] проверка на наличие пустой строки', ({ annotate }) => {
        annotate(0.5)

        const callbackFunction = (value) => value === ''

        expect(hasCorrectElement([1, 3, '5', null], callbackFunction)).toBe(
            false,
        )

        expect(hasCorrectElement([1, '', 'abc'], callbackFunction)).toBe(true)
    })
})