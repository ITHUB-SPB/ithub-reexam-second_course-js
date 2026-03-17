import { describe, test, expect } from 'vitest'
import { isPalindrome } from './task4'

describe('обработка некорректных данных', () => {
    test('[0.125] выдается ошибка, если пользователь отменяет ввод', ({
        annotate,
    }) => {
        annotate(0.125)
        expect(() => isPalindrome(null)).toThrowError(
            'Пользователь отменил ввод',
        )
    })

    test('[0.125] выдается ошибка, если ввод содержит небуквенные символы', ({
        annotate,
    }) => {
        annotate(0.125)
        expect(() => isPalindrome('т5т')).toThrowError(
            'Некорректные входные данные',
        )
    })

    test('[0.125] выдается ошибка, если строка содержит несколько слов', ({
        annotate,
    }) => {
        annotate(0.125)
        expect(() => isPalindrome('потоп потоп')).toThrowError(
            'Введено несколько слов',
        )
    })
})

test('[0.125] буква не является палиндромом', ({ annotate }) => {
    annotate(0.125)
    expect(isPalindrome('н')).toBe('н - не палиндром')
})

test('[0.5] определяет палиндромы нечетной длины', ({ annotate }) => {
    annotate(0.5)
    expect(isPalindrome('потоп')).toBe('потоп - палиндром')
    expect(isPalindrome('eye')).toBe('eye - палиндром')
    expect(isPalindrome('партер')).toBe('партер - не палиндром')
    expect(isPalindrome('лечебница')).toBe('лечебница - не палиндром')
})

test('[0.5] определяет палиндромы четной длины', ({ annotate }) => {
    annotate(0.5)
    expect(isPalindrome('анна')).toBe('анна - палиндром')
    expect(isPalindrome('noon')).toBe('noon - палиндром')
    expect(isPalindrome('корень')).toBe('корень - не палиндром')
    expect(isPalindrome('крючок')).toBe('крючок - не палиндром')
})

test('[0.5] не зависит от регистра', ({ annotate }) => {
    annotate(0.5)
    expect(isPalindrome('Макакам')).toBe('Макакам - палиндром')
    expect(isPalindrome('Civic')).toBe('Civic - палиндром')
})
