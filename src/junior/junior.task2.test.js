import { describe, test, expect } from 'vitest'
import { getMultiplesOfThree } from './junior.task2'

describe('обработка некорректных данных', () => {
    test('[0.25] если пользователь отменяет ввод, выдается ошибка', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => getMultiplesOfThree(null)).toThrowError(
            'Пользователь отменил ввод',
        )
    })

    test('[0.5] если пользователь ввёл не число, выдается ошибка', ({
        annotate,
    }) => {
        annotate(0.5)
        expect(() => getMultiplesOfThree('abc')).toThrowError(
            'Некорректные входные данные',
        )
    })
})

test('[0.5] работает на базовых случаях', ({ annotate }) => {
    annotate(0.5)
    expect(getMultiplesOfThree('11')).toBe('3, 6, 9')
    expect(getMultiplesOfThree('14')).toBe('3, 6, 9, 12')
})

test('[0.25] правая граница включена в вывод', ({ annotate }) => {
    annotate(0.25)
    expect(getMultiplesOfThree('9')).toBe('3, 6, 9')
})

test('[0.25] не добавляет лишние разделители', ({ annotate }) => {
    annotate(0.25)
    expect(getMultiplesOfThree('4')).toBe('3')
})

test('[0.25] выдает пустую строку, если кратных нет', ({ annotate }) => {
    annotate(0.25)
    expect(getMultiplesOfThree('2')).toBe('')
})
