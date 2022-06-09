export const Ea = {
  /**
    * Storage object for custom easing equasions.
    */
  eq: {},

  /**
   * Calculates the current value relative to the total range using the given
   * easing method.
   * 
   * @param {number} c - Current value within the range.
   * @param {number|[number, number]} r - Range or a number when using 0 as the base.
   * @param {function} e - Easing equasion (defaults to linear).
   * @returns {number} Position of the current value within the range.
   */
  se: (c, r, e = p => p) => e(Ea.p(c, ...(typeof r == 'number' ? [0, r] : r))),

  /**
   * Calculates the position of the curent value within the given range.
   *
   * @param {number} c - Current value.
   * @param {number} b - Beginning of the range.
   * @param {number} e - End of the range.
   * @returns {number} Position of the current value within the range.
   */
  p: (c, b, e) => 1 / (e - b) * (c - b)
};
