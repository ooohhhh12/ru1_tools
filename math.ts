/**
 *
 * @param [min, max] 范围内的随机整数
 * @returns {Number}
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
