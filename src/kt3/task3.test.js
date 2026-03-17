import { test, expect, vi } from 'vitest'
import { reverseArray } from './task3'

test('[1] выводит развернутый массив в консоль', ({ annotate }) => {
    annotate(1)

    const spy = vi.spyOn(console, 'log')

    const values = [1, 2, 3]
    reverseArray(values)

    expect(spy).toHaveBeenCalledOnce()
    expect(spy).toHaveBeenCalledWith([3, 2, 1])

    vi.restoreAllMocks()
})

test('[0.75] модифицирует массив на месте', ({ annotate }) => {
    annotate(0.75)

    const spy = vi.spyOn(console, 'log')

    const values = [1, 2, 3]
    reverseArray(values)

    console.log(values)
    expect(spy).toHaveBeenLastCalledWith([3, 2, 1])

    vi.restoreAllMocks()
})
