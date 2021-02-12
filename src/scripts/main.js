import createButton from './components/button';
import createSpan from './components/spanData';
import createBreakLine from './components/breakLine';
import { increment } from './store/actions';
import store from './store';

createButton({
  label:'teste',
  onClick: () => store.dispatch(increment(1))
});

createBreakLine();

createSpan({ data: 0 });
