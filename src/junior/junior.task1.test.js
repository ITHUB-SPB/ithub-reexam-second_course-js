import { describe, test, expect } from 'vitest'
import { processWord } from './junior.task1'

describe('обработка некорректных данных', () => {
    test('[0.25] если слово содержит небуквенные символы, выдается ошибка', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => processWord('abc123', 'a')).toThrowError(
            'Слово содержит небуквенные символы',
        )
    })

    test('[0.25] если пользователь отменяет ввод, выдается ошибка', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => processWord(null, 'a')).toThrowError('Некорректное слово')
        expect(() => processWord('Рай', null)).toThrowError(
            'Не указан игнорируемый символ',
        )
    })
})

test('[0.25] работает при единственном вхождении игнорируемого символа', ({
    annotate,
}) => {
    annotate(0.25)
    expect(processWord('Рай', 'а')).toBe('Рй')
    expect(processWord('Мячик', 'м')).toBe('ячик')
})

test('[0.5] работает при множественном вхождении игнорируемого символа', ({
    annotate,
}) => {
    annotate(0.5)
    expect(processWord('Идиллия', 'И')).toBe('длля')
    expect(processWord('Погода', 'о')).toBe('Пгда')
})

test('[0.25] если игнорируемого символа нет в строке, отдается исходная', ({
    annotate,
}) => {
    annotate(0.25)
    expect(processWord('Погода', 'я')).toBe('Погода')
})
