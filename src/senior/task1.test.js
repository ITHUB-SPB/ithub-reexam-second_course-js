import { assert, test, describe } from 'vitest'
import { getSumOfValues } from './task1'

describe('возвращает сумму значений объекта', () => {
    test('[1] базовые случаи', ({ annotate }) => {
        annotate(1)
        assert.deepEqual(
            getSumOfValues({ price1: 100, price2: 150, price3: 200 }),
            450,
        )
        assert.deepEqual(getSumOfValues({ price1: 100, price2: 150 }), 250)
    })

    test('[0.5] пустой объект', ({ annotate }) => {
        annotate(0.5)
        assert.deepEqual(getSumOfValues({}), 0)
    })
})

test('[0.5] не модифицирует исходный объект', ({ annotate }) => {
    annotate(0.5)

    const initial = { price1: 100, price2: 150 }
    getSumOfValues(initial)
    assert.deepEqual(initial, { price1: 100, price2: 150 })
})
