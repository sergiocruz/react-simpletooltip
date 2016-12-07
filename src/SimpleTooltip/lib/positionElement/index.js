import positionTop from './positionTop';
import positionRight from './positionRight';
import positionBottom from './positionBottom';
import positionLeft from './positionLeft';

export function getCoordinates(el, position) {
  switch(position) {
    default:
    case 'top':
      return positionTop(el);

    case 'right':
      return positionRight(el);

    case 'bottom':
      return positionBottom(el);

    case 'left':
      return positionLeft(el);
  }
}
