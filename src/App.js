import Button from './UI elements/Button';
import Circle from './UI elements/Circle';

function App() {
  const num = 0;
  const btnsNames = [
    'Decrease 5',
    'Decrease 1',
    'Reset',
    'Increase 1',
    'Increase 5',
  ];

  return (
    <div className='App'>
      <Circle num={num} />
      <div className='container-btns'>
        {btnsNames.map(btnName => (
          <Button key={btnName}>{btnName}</Button>
        ))}
      </div>
    </div>
  );
}

export default App;
