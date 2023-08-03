import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSign, changeOperations, reset } from './store';

import bg from './assets/bg2.jpg';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const { totalOperations, sign } = useSelector((state) => state.operations);

  const dispatch = useDispatch();

  let result;
  if (sign === '+') result = parseInt(input1) + parseInt(input2);
  else if (sign === '-') result = parseInt(input1) - parseInt(input2);
  else if (sign === '*') result = parseInt(input1) * parseInt(input2);
  else if (sign === '/') result = parseInt(input1) / parseInt(input2);

  if (input1 === '' || input2 === '') result = null;

  const handleClick = (operator) => {
    dispatch(changeSign(operator));
    dispatch(changeOperations());
  };

  const handleReset = () => {
    dispatch(reset());
    setInput1('');
    setInput2('');
  };

  return (
    <>
      <img src={bg} alt="" className="bg-img" />

      <div className="app">
        <p>Total operations {totalOperations}</p>
        <div>
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <span>{sign}</span>
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="result-container">
          <button onClick={handleReset}>Reset</button>
          {result && <div>Result: {result}</div>}
        </div>
      </div>
    </>
  );
}

export default App;
