import { test, expect, describe, assert } from 'vitest'
import { countPrices } from './task3'

describe('возвращает количество интересующих строк', () => {
    test('[0.75] обрабатывает рубли', ({ annotate }) => {
        annotate(0.5)

        const prices = [
            'Цена товара - 1200$',
            'Цена не определена',
            '9999 ₽',
            'Ценовая категория - больше 300$',
            'Цена за услугу 500',
            '150$',
            'Оптовая цена - 201 ₽',
        ]

        assert.deepEqual(countPrices(prices, 'RUB'), { RUB: 2 })
    })

    test('[0.75] обрабатывает доллары', ({ annotate }) => {
        annotate(0.5)

        const prices = [
            'Цена товара - 1200$',
            'Цена не определена',
            '9999 ₽',
            'Ценовая категория - больше 300$',
            'Цена за услугу 500',
            '150$',
            'Оптовая цена - 201 ₽',
        ]

        assert.deepEqual(countPrices(prices, 'USD'), { USD: 3 })
    })

    test('[0.5] не модифицирует исходные данные', ({ annotate }) => {
        annotate(0.5)

        const prices = [
            'Цена товара - 1200$',
            'Цена не определена',
            '9999 ₽',
            'Ценовая категория - больше 300$',
            'Цена за услугу 500',
            '150$',
            'Оптовая цена - 201 ₽',
        ]

        const expected = [...prices]

        countPrices(prices, 'USD')
        countPrices(prices, 'RUB')

        assert.deepEqual(prices, expected)
    })
})

describe('обработка особых случаев', () => {
    test('[0.5] валюта не задана', ({ annotate }) => {
        annotate(0.5)

        expect(() => countPrices(['100$'])).toThrowError('Валюта не задана')
    })

    test('[0.5] валюта задана некорректно', ({ annotate }) => {
        annotate(0.5)

        expect(() => countPrices(['100$'], 'EUR')).toThrowError(
            'Поддерживаемые валюты: RUB, USD',
        )
    })
})
