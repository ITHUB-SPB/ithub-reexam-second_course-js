/**
 * @description 
 * Функция принимает на вход неопределенное количество объектов 
 * и возвращает единый объект по образцу.
 * 
 * @privateRemarks
 * до 1.75 балла
 * 
 * @param {Object[]} args - неопределенное количество аргументов
 * 
 * @returns {Object}
 *
 * @example
 * // returns { id: 1, status: "draft", created: "2025-05-05" }
 * ```js
 * const firstObject = { id: 1 }
 * const secondObject = { status: 'draft', created: "2025-05-05" }
 * joinObjects(firstObject, secondObject)
 * ```
 * 
 */
export function joinObjects(...args) {
    return {}
}
