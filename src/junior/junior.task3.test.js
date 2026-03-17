import { assert, test } from 'vitest'
import { multipliedByN } from './junior.task3'

describe('обработка базовых случаев', () => {
    test('[1] возвращает массив с перемноженными элементами', ({ annotate }) => {
        annotate(1)

        assert.deepEqual(multipliedByN([1, 2.5, -5], 2), [2, 5.0, -10])
        assert.deepEqual(multipliedByN([0, 1, 2], 1.5), [0, 1.5, 3])
        assert.deepEqual(multipliedByN([], 2), [])
    })

    test('[0.5] не модифицирует исходный массив', ({ annotate }) => {
        annotate(0.5)

        const initial = [1, 2, 3]
        multipliedByN(initial, 2)
        assert.deepEqual(initial, [1, 2, 3])
    })
})
