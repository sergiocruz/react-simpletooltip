import { EXTRA_PAD, centerVerticallyAlign } from './shared';

function topPosition(el) {
  const tooltipEl = el.firstChild;
  return centerVerticallyAlign(el, tooltipEl);
}

function leftPosition(el) {
  const left = el.offsetLeft + el.offsetWidth + EXTRA_PAD;
  return left;
}

export default function position(el) {
  const coordinates = {
    top: topPosition(el),
    left: leftPosition(el),
  }

  return coordinates;
}
