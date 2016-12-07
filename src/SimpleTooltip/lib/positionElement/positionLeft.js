import { EXTRA_PAD, centerVerticallyAlign } from './shared';

function topPosition(el) {
  const tooltipEl = el.firstChild;
  return centerVerticallyAlign(el, tooltipEl);
}

function leftPosition(el) {
  const tooltipEl = el.firstChild;
  const left = el.offsetLeft - tooltipEl.offsetWidth - EXTRA_PAD;
  return left;
}

export default function position(el) {
  return {
    left: leftPosition(el),
    top: topPosition(el),
  }
}
