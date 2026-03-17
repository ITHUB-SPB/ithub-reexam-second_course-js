import { describe, test, expect, assert } from 'vitest'
import { checkObject } from './senior.task3'

describe('возвращает объект с информацией о наличии ключей', () => {
    test('[0.75] работает на базовых случаях', ({ annotate }) => {
        annotate(0.75)

        const inputObject = { id: 1, status: 'draft' }
        const inputKeys = ['status', 'id', 'createdAt']

        const expected = { status: true, id: true, createdAt: false }

        assert.deepEqual(checkObject(inputObject, inputKeys), expected)
    })

    test('[0.25] корректно обрабатывает nullable-значения', ({ annotate }) => {
        annotate(0.25)

        const inputObject = { value: undefined, author: null }
        const inputKeys = ['value', 'author', 'createdAt']

        const expected = { value: true, author: true, createdAt: false }

        assert.deepEqual(checkObject(inputObject, inputKeys), expected)
    })

    test('[0.25] не модифицирует исходные данные', ({ annotate }) => {
        annotate(0.25)

        const inputObject = { id: 1 }
        const inputKeys = ['id']

        checkObject(inputObject, inputKeys)
        assert.deepEqual(inputObject, { id: 1 })
        assert.deepEqual(inputKeys, ['id'])
    })
})

describe('обработка особых случаев', () => {
    test('[0.25] пустой массив ключей', ({ annotate }) => {
        annotate(0.25)

        expect(() => checkObject({ id: 1 }, [])).toThrowError('Ключи не заданы')
    })

    test('[0.25] заданы дублирующие ключи', ({ annotate }) => {
        annotate(0.25)

        assert.deepEqual(checkObject({ id: 1 }, ['id', 'id']), { id: true })
    })
})
