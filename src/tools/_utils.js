/**
 * Генерация уникального ID
 * @param length
 * @returns {string}
 */
function getUniqueId(length = 10) {
    let dt = new Date().getTime();

    return "x".repeat(length).replace(/[x]/g, function () {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return r.toString(16);
    });
}

/**
 * Конвертация цены для локали
 * @param amount
 * @param locale
 * @param maximumFractionDigits
 *
 * @example
 *    convertToLocalPrice(1200.45); // 12 000,45
 *
 * @returns {any}
 */
function convertToLocalPrice(
    amount = 0,
    locale = "RU",
    maximumFractionDigits = 0
) {
    const n = Number(amount);

    return typeof n === "number"
        ? n.toLocaleString(locale, {
              maximumFractionDigits,
          })
        : 0;
}

export default {
    getUniqueId,
    convertToLocalPrice,
};
