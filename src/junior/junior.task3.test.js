import { describe, test, expect } from 'vitest'
import { renderLadder } from './junior.task3'

describe('обработка некорректных данных', () => {
    test('[0.25] выдается ошибка, если пользователь отменяет ввод', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => renderLadder(null)).toThrowError(
            'Пользователь отменил ввод',
        )
    })

    test('[0.25] выдается ошибка, если пользователь ввёл не число', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => renderLadder('abc')).toThrowError(
            'Некорректные входные данные',
        )
    })

    test('[0.25] выдается ошибка, если высота отрицательная', ({
        annotate,
    }) => {
        annotate(0.25)
        expect(() => renderLadder('-7')).toThrowError(
            'Некорректные входные данные',
        )
    })

    test('[0.25] выдается ошибка, если высота не целая', ({ annotate }) => {
        annotate(0.25)
        expect(() => renderLadder('7.12')).toThrowError(
            'Некорректные входные данные',
        )
    })
})

test('[0.25] выдает пустую строку при нулевой высоте', ({ annotate }) => {
    annotate(0.25)
    expect(renderLadder('0')).toBe('')
})

test('[0.5] работает на высоте 4', ({ annotate }) => {
    annotate(0.5)
    const expectedResult = ['1', '12', '123', '1234'].join('\n')
    expect(renderLadder('4')).toBe(expectedResult)
})

test('[0.5] работает на высоте 6', ({ annotate }) => {
    annotate(0.5)
    const expectedResult = ['1', '12', '123', '1234', '12345', '123456'].join(
        '\n',
    )
    expect(renderLadder('6')).toBe(expectedResult)
})

test('[0.25] работает на высоте 1', ({ annotate }) => {
    annotate(0.25)
    expect(renderLadder('1')).toBe('1')
})
