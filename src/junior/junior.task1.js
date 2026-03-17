/**
 * @param {string} word - Исходное слово
 * @param {string} ignoredCharacted - Игнорируемый символ
 * @returns {string} Новая строка без указанного символа
 * @description Формирование новой строки без указанного символа
 */
export function processWord(word, ignoredCharacted) {
    if (word === null) {
        throw new Error('Некорректное слово')
    }

    if (ignoredCharacted === null) {
        throw new Error('Не указан игнорируемый символ')
    }

    if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
        throw new Error('Слово содержит небуквенные символы')
    }

    if (!word.includes(ignoredCharacted)) {
        return word
    }

    let result = ''

    return result
}
