/**
 * 英文字符串的首字母大写
 * @param str 
 * @returns 
 */
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
/**
 * 翻转字符串
 * @param str 
 * @returns 
 */
const reverse = str => str.split('').reverse().join('');
/**
 * 字符串首字母大写
 * @param str 
 * @returns 
 */
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
/**
 * 每个单词首字母大写
 * @param str 
 * @returns 
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
 