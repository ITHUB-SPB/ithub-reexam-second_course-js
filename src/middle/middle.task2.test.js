import { describe, test, expect, assert } from 'vitest'
import { generateArray } from './middle.task2'

describe('возвращает массив с объектами, преобразованными в массивы значений', () => {
    test('[0.5] обрабатывает множественные свойства', ({ annotate }) => {
        annotate(0.5)

        const data = [[1], { id: 40, part: 10 }, [100]]
        const expected = [[1], [40, 10], [100]]

        assert.deepEqual(generateArray(data), expected)
    })

    test('[0.5] обрабатывает множественные объекты', ({ annotate }) => {
        annotate(0.5)

        const data = [[1], { id: 40 }, [100], { part: 10 }]
        const expected = [[1], [40], [100], [10]]

        assert.deepEqual(generateArray(data), expected)
    })

    test('[0.5] модифицирует исходный массив', ({ annotate }) => {
        annotate(0.5)

        const data = [[1], { id: 40 }, [100], { part: 10 }]
        const expected = [[1], [40], [100], [10]]

        generateArray(data)
        assert.deepEqual(data, expected)
    })
})