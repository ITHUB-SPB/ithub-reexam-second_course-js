import { test, expect, vi, describe, assert } from 'vitest'
import { splitName, toSplittedNames } from './senior.task1'

describe('функция splitName', () => {
    test('[0.5] обрабатывает имя и фамилию', ({ annotate }) => {
        annotate(0.5)

        const expected = {
            firstName: 'Steven',
            lastName: 'King',
        }

        assert.deepEqual(splitName('Steven King'), expected)
    })

    test('[0.5] обрабатывает имя', ({ annotate }) => {
        annotate(0.5)

        assert.deepEqual(splitName('Oliver'), { firstName: 'Oliver' })
    })
})

describe('функция toSplittedNames', () => {
    test('[0.5] работает на базовых случаях', ({ annotate }) => {
        annotate(0.5)

        const names = ['Steven King', 'Oliver', 'Persius Master']

        const expected = [
            { firstName: 'Steven', lastName: 'King' },
            { firstName: 'Oliver' },
            { firstName: 'Persius', lastName: 'Master' },
        ]

        assert.deepEqual(toSplittedNames(names), expected)
    })

    test('[0.25] использует функцию splitName и метод map', ({ annotate }) => {
        annotate(0.25)

        const names = ['Steven King', 'Oliver', 'Persius Master']

        const spy = vi.spyOn(names, 'map')

        toSplittedNames(names)

        expect(spy).toBeCalledWith(splitName)
    })

    test('[0.25] не модифицирует исходные данные', ({ annotate }) => {
        annotate(0.25)

        const names = ['Steven King', 'Oliver', 'Persius Master']

        const expected = [...names]

        toSplittedNames(names)

        assert.deepEqual(names, expected)
    })
})
