import { describe, test, expect, assert } from 'vitest'
import { calculateSum } from './middle.task1'

describe('обработка особых случаев', () => {
    test('[0.25] отсутствие данных', ({ annotate }) => {
        annotate(0.25)

        expect(() => calculateSum([])).toThrowError('Передан пустой массив')
    })

    test('[0.5] отсутствие корректных данных', ({ annotate }) => {
        annotate(0.5)

        expect(() => calculateSum(['abc5', '5g'])).toThrowError(
            'Отсутствуют численные данные',
        )
    })
})

test('[0.75] работает на базовых случаях', ({ annotate }) => {
    annotate(0.75)

    expect(calculateSum(['10.5', 'Строка', '5g', '15', '05'])).toBe(30.5)
})

test('[0.25] не модифицирует массив', ({ annotate }) => {
    annotate(0.25)

    const values = ['10.5', 'Строка', '5g', '15', '05']
    const expected = [...values]

    calculateSum(values)
    assert.deepEqual(values, expected)
})
