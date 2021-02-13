import createButton from './components/button';
import createSpan from './components/spanData';
import createBreakLine from './components/breakLine';
import { increment, decrement } from './store/actions';
import store from './store';

createButton({
  label:'adicionar',
  onClick: () => store.dispatch(increment(1))
});

createButton({
  label:'diminuir',
  onClick: () => store.dispatch(decrement(1))
});

createBreakLine();

createSpan({ data: 0 });
