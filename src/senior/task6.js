/**
 * @param {Object[]} args
 * @returns {Object}
 *
 * @description Функция принимает на вход неопределенное
 * количество аргументов, каждый из которых является объектом
 * и возвращает единый объект по образцу
 *
 * @example
 * const firstObject = { id: 1 }
 * const secondObject = { status: 'draft', created: "2025-05-05" }
 * joinObjects(firstObject, secondObject) // { id: 1, status: "draft", created: "2025-05-05" }
 */
export function joinObjects(...args) {
    return {}
}
