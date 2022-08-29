import Button from './UI elements/Button';
import Circle from './UI elements/Circle';

import { selectCount } from './features/counter/CounterSlice';
// Redux hook for reading states
import { useSelector } from 'react-redux';
// Redux hook for triggeing actions
import { useDispatch } from 'react-redux';
import {
  increment,
  incrementByAmount,
  reset,
  decrement,
  decrementByAmount,
} from './features/counter/CounterSlice';

function App() {
  // Using Redux hook:
  //const count = useSelector(state => state.counter.value);
  // Shorter version:
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const btns = [
    {
      name: 'Increase 1',
      action: () => dispatch(increment()),
    },
    {
      name: 'Increase 5',
      action: () => dispatch(incrementByAmount(5)),
    },
    {
      name: 'Reset',
      action: () => dispatch(reset()),
    },
    {
      name: 'Decrease 1',
      action: () => dispatch(decrement()),
    },
    {
      name: 'Decrease 5',
      action: () => dispatch(decrementByAmount(5)),
    },
  ];

  return (
    <div className='App'>
      <Circle count={count} />
      <div className='container-btns'>
        {btns.map(btn => (
          <Button key={btn.name} click={btn.action}>
            {btn.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
