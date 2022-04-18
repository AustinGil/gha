/**
 * @param {any} v
 * @returns {string}
 */
export const getType = (v) => {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
};

/**
 * @param {any} v
 * @param {string} type
 * @returns {boolean}
 */
export let isType = (v, type) => {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase() === type;
};

/**
 * @param {number} v
 */
export const double = (v) => {
  return v.toUpperCase()
};
