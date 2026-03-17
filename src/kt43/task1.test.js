import { test, describe, vi, expect } from 'vitest'
import { logString } from './task1'

describe('выводит строку в консоль', () => {
    test('[0.5] базовый случай', ({ annotate }) => {
        annotate(0.5)

        const spy = vi.spyOn(console, 'log')

        const values = [{ word: 'Hello' }, { word: 'world!' }]
        logString(...values)

        expect(spy).toHaveBeenCalledOnce()
        expect(spy).toHaveBeenCalledWith('Hello world!')

        vi.restoreAllMocks()
    })

    test('[0.5] базовый случай', ({ annotate }) => {
        annotate(0.5)

        const spy = vi.spyOn(console, 'log')

        const values = [{ word: 'Hello' }, { word: 'my' }, { word: 'name' }]
        logString(...values)

        expect(spy).toHaveBeenCalledOnce()
        expect(spy).toHaveBeenCalledWith('Hello my name')

        vi.restoreAllMocks()
    })
})

describe('особые случаи', () => {
    test('[0.5] один аргумент', ({ annotate }) => {
        annotate(0.5)

        const spy = vi.spyOn(console, 'log')

        logString({ word: 'single' })

        expect(spy).toHaveBeenCalledOnce()
        expect(spy).toHaveBeenCalledWith('single')

        vi.restoreAllMocks()
    })

    test('[0.5] отсутствие аргументов', ({ annotate }) => {
        annotate(0.5)

        const spy = vi.spyOn(console, 'log')

        expect(logString).toThrowError('Отсутствуют объекты для вывода')

        expect(spy).toHaveBeenCalledTimes(0)

        vi.restoreAllMocks()
    })
})
