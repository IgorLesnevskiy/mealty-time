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

export default {
    getUniqueId,
};
