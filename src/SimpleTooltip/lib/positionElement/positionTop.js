import { EXTRA_PAD } from './shared';

function topPosition(el) {
  const tooltipEl = el.firstChild;
  const top = el.offsetTop - tooltipEl.offsetHeight - EXTRA_PAD;
  return top;
}

function leftPosition(el) {
  const left = el.offsetLeft;
  return left;
}

export default function position(el) {
  return {
    top: topPosition(el),
    left: leftPosition(el),
  };
}
