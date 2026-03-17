import { describe, test, expect, assert } from 'vitest'
import { generateArray } from './task2'

describe('возвращает массив с объектами, преобразованными в массивы значений', () => {
    test('[1] множественные свойства', ({ annotate }) => {
        annotate(1)

        const data = [[1], { id: 40, part: 10 }, [100]]
        const expected = [[1], [40, 10], [100]]

        assert.deepEqual(generateArray(data), expected)
    })

    test('[1] множественные объекты', ({ annotate }) => {
        annotate(1)

        const data = [[1], { id: 40 }, [100], { part: 10 }]
        const expected = [[1], [40], [100], [10]]

        assert.deepEqual(generateArray(data), expected)
    })
})

test('[1] модифицирует исходный массив', ({ annotate }) => {
    annotate(1)

    const data = [[1], { id: 40 }, [100], { part: 10 }]
    const expected = [[1], [40], [100], [10]]

    generateArray(data)
    assert.deepEqual(data, expected)
})
