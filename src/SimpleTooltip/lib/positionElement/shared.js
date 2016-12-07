/**
 * Extra pad used when positioning elements
 * @type {Number}
 */
export const EXTRA_PAD = 10;

/**
 * Vertically aligns two elements and returns
 * the next top position for element 2.
 *
 * @param  {Element} element1
 * @param  {Element} element2
 * @return {Number}
 */
export function centerVerticallyAlign(element1, element2) {
  const midPosition1 = element1.offsetTop + (element1.offsetHeight / 2);
  const midPosition2 = element2.offsetHeight / 2;
  return midPosition1 - midPosition2;
}
