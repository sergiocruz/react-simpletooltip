const EXTRA_PAD = 7;

function topPosition(el) {
  const tooltip = el.firstChild;
  let top = 0;
  top = el.offsetTop;
  top -= tooltip.offsetHeight;
  top -= EXTRA_PAD;
  return top;

}

function leftPosition(el) {
  let left = 0;
  left = el.offsetLeft;
  return left;
}

export {
  topPosition,
  leftPosition
}
