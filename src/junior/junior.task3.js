/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
export function renderLadder(height) {
    if (height === null) {
        throw new Error('Пользователь отменил ввод')
    }

    const h = Number(height)

    if (isNaN(h) || h < 0 || Math.floor(h) !== h) {
        throw new Error('Некорректные входные данные')
    }

    if (h === 0) {
        return ''
    }

    if (h === 1) {
        return '1'
    }

    let result = ''

    return result
}
