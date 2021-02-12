import store from '../store';
import render from './render';

export default function createSpan () {
  const span = document.createElement('span');
  store.subscribe(() => {
    span.textContent = store.getState().counter.count;
  });
  render(span);
}
