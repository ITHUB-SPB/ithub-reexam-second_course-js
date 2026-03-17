import { test, expect, vi } from 'vitest'
import { reverseArray } from './middle.task3'

test('[1] разворачивает массив с выводом в консоль', ({ annotate }) => {
    annotate(1)

    const spy = vi.spyOn(console, 'log')

    const values = [1, 2, 3]
    reverseArray(values)

    expect(spy).toHaveBeenCalledOnce()
    expect(spy).toHaveBeenCalledWith([3, 2, 1])

    vi.restoreAllMocks()
})

test('[0.5] модифицирует массив на месте', ({ annotate }) => {
    annotate(0.5)

    const spy = vi.spyOn(console, 'log')

    const values = [1, 2, 3]
    reverseArray(values)

    console.log(values)
    expect(spy).toHaveBeenLastCalledWith([3, 2, 1])

    vi.restoreAllMocks()
})
