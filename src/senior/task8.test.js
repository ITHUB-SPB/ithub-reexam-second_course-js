import { describe, test, expect, assert } from 'vitest'
import { checkObject } from './task8'

describe('возвращает объект с информацией о наличии ключей', () => {
    test('[1] работает на базовых случаях', ({ annotate }) => {
        annotate(1)

        const inputObject = { id: 1, status: 'draft' }
        const inputKeys = ['status', 'id', 'createdAt']

        const expected = { status: true, id: true, createdAt: false }

        assert.deepEqual(checkObject(inputObject, inputKeys), expected)
    })

    test('[0.5] корректно обрабатывает nullable-значения', ({ annotate }) => {
        annotate(0.5)

        const inputObject = { value: undefined, author: null }
        const inputKeys = ['value', 'author', 'createdAt']

        const expected = { value: true, author: true, createdAt: false }

        assert.deepEqual(checkObject(inputObject, inputKeys), expected)
    })

    test('[0.5] не модифицирует исходные данные', ({ annotate }) => {
        annotate(0.5)

        const inputObject = { id: 1 }
        const inputKeys = ['id']

        checkObject(inputObject, inputKeys)
        assert.deepEqual(inputObject, { id: 1 })
        assert.deepEqual(inputKeys, ['id'])
    })
})

describe('обработка особых случаев', () => {
    test('[0.5] пустой массив ключей', ({ annotate }) => {
        annotate(0.5)

        expect(() => checkObject({ id: 1 }, [])).toThrowError('Ключи не заданы')
    })

    test('[0.5] заданы дублирующие ключи', ({ annotate }) => {
        annotate(0.5)

        assert.deepEqual(checkObject({ id: 1 }, ['id', 'id']), { id: true })
    })
})
